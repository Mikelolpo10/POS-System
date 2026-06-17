import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  return (
    <>
      <div className="flex min-h-screen bg-primary-bg">
        <Sidebar />

        <Outlet />
      </div>
    </>
  )
}