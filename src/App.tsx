import { Navigate, Route, Routes } from "react-router-dom";
import { NotFound } from "src/pages/NotFound";
import { RunCover } from "src/pages/RunCover";
import { ServiceUnavailable } from "src/pages/ServiceUnavailable";

export function App() {
  return <Routes>
    <Route path="/RunCover/:id" Component={RunCover} />
    <Route path="/ServiceUnavailable" Component={ServiceUnavailable} />
    <Route path="/NotFound" Component={NotFound} />
    <Route path="/*" element={<Navigate to={"/NotFound"}/>} />
  </Routes>
}