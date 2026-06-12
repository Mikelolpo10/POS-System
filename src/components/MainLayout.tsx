import { Outlet } from "react-router"; 
import Sidebar from "./Sidebar";

export default function MainLayout() {
  return (
    <>
    <Sidebar />

    <Outlet />

    </>
  )
}