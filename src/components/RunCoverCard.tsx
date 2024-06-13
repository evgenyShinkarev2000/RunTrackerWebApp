import AvTimerIcon from '@mui/icons-material/AvTimer';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SpeedIcon from '@mui/icons-material/Speed';
import StraightenIcon from '@mui/icons-material/Straighten';
import { Box, Card } from '@mui/material';
import { useTranslation } from "react-i18next";
import { RunCoverCardItem } from "src/components/RunCoverCardItem";
import { RunCover } from 'src/pages/RunCover';

export type RunCoverCardProps = {
  model: Partial<RunCover>,
}

export function RunCoverCard(props: RunCoverCardProps) {
  debugger;
  const { t } = useTranslation();

  return <div style={{ display: "grid", width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center" }}>
    <Card style={{ padding: "16px" }}>
      {/* <Typography variant='h5' align='center' marginBottom={1}>{props.model.title}</Typography> */}
      <Box
        style={{ display: "grid", gap: "16px" }}
        sx={{
          gridTemplateColumns: {
            xs: "1fr 1fr",
            sm: "1fr 1fr 1fr",
          }
        }}>
        <RunCoverCardItem
          value={appDateTimeFormat(props.model.start) ?? undefined}
          name={t("runCoverCard.beginDate")}
          icon={<CalendarTodayIcon />}
        />
        <RunCoverCardItem
          value={appFormatedDuration(props.model.duration) ?? undefined}
          name={t("runCoverCard.duration")}
          icon={<ScheduleIcon />}
        />
        <RunCoverCardItem
          value={props.model.duration != undefined ? (props.model.distance! / 1000).toFixed(2).toString() : undefined}
          unit={t("unit.km")}
          name={t("runCoverCard.distance")}
          icon={<StraightenIcon />}
        />
        <RunCoverCardItem
          value={props.model.averageSpeed != undefined ? (props.model.averageSpeed * 3.6).toFixed(1).toString() : undefined}
          unit={t("unit.kmPerHour")}
          name={t("runCoverCard.speed")}
          icon={<SpeedIcon />}
        />
        <RunCoverCardItem
          value={speedToPace(props.model.averageSpeed) ?? undefined}
          unit={t("unit.minPerKm")}
          name={t("runCoverCard.pace")}
          icon={<AvTimerIcon />}
        />
        <RunCoverCardItem
          value={props.model.averagePulse != undefined ? Math.round(props.model.averagePulse).toString() : undefined}
          unit={t("unit.bpm")}
          name={t("runCoverCard.pulse")}
          icon={<FavoriteBorderIcon />}
        />
      </Box>
    </Card>
  </div>

}

function speedToPace(speed?: number): string | null {
  if (speed == undefined) {
    return null;
  }
  if (speed == 0) {
    return "00:00";
  }

  const pace = 1 / speed * 1000;

  return `${Math.floor(pace / 60).toString().padStart(2, "0")}:${Math.round(pace % 60).toString().padStart(2, "0")}`;
}

function appFormatedDuration(date?: Date): string | null {
  if (date == undefined) {
    return null;
  }

  return `${date.getUTCHours().toString().padStart(2, "0")}:${date.getUTCMinutes().toString().padStart(2, "0")}:${date.getUTCSeconds().toString().padStart(2, "0")}`;
}

function appDateTimeFormat(date?: Date): string | null {
  if (date == undefined) {
    return null;
  }

  return `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1).toString().padStart(2, "0")}.${date.getFullYear().toString().padStart(2, "0")} `
    + `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
}