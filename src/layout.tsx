import { Outlet } from "react-router-dom";
import { Header } from "./components/header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Layout() {
  return (
    <div className="max-w-5xl m-auto min-h-screen">
      <ToastContainer />
      <Header />
      <Outlet />
    </div>
  );
}
