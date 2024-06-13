import { useMediaQuery } from "@mui/material";
import { Navigate, useParams } from "react-router-dom";
import { RunCoverCard } from "src/components/RunCoverCard";
import backgroundImage from "src/images/background-map.jpg";
import { useRunTrackerApi } from "src/store";

export type RunCoverResponse = {
  title: string,
  distance: number,
  start: string,
  duration: number,
  averageSpeed: number,
  averagePulse: number,
}

export type RunCover = {
  title: string,
  distance: number,
  start: Date,
  duration: Date,
  averageSpeed: number,
  averagePulse: number,
}

export function RunCover() {
  const api = useRunTrackerApi();
  const isHorizontalFormat = useMediaQuery("(aspect-ratio > 1)");
  const id = Number.parseInt(useParams()["id"]!);
  if (Number.isNaN(id)) {
    return <Navigate to={"/NotFound"} />
  }

  const runCoverResponse = api.useGetRunCoverByIdQuery(id);
  if (runCoverResponse.isLoading) {
    return <p>loading</p>
  }

  if (runCoverResponse.isError) {
    // @ts-ignore
    const status = runCoverResponse.error.originalStatus;
    if (status === undefined || status === 500) {
      return <Navigate to={"/ServiceUnavailable"} />
    } else if (status === 404) {
      return <Navigate to={"/NotFound"} />
    }
  }
  console.log(runCoverResponse.data);
  const runCoverResponseData: RunCoverResponse = runCoverResponse.data!;
  const runCover: RunCover =  {
    title: runCoverResponseData.title,
    start: new Date(Date.parse(runCoverResponseData.start)), 
    distance: runCoverResponseData.distance,
    duration: new Date(runCoverResponseData.duration / 1000),
    averageSpeed: runCoverResponseData.averageSpeed,
    averagePulse: runCoverResponseData.averagePulse,
  }

  return <div style={{ position: "relative", overflow: "clip" }}>
    <img
      src={backgroundImage}
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        height: !isHorizontalFormat ? "100vh" : "unset",
        width: isHorizontalFormat ? "100vw" : "unset",
        zIndex: -1,
        filter: "blur(1px) brightness(0.5)",
        aspectRatio: 1,
      }}
    />
    <RunCoverCard model={runCover} />
  </div>
}