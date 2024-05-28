import { Outlet } from "react-router-dom";
import { Header } from "./components/header";

export function Layout() {
  return (
    <div className="max-w-5xl m-auto min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
}
