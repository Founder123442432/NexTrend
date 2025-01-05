import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

export default function Admin() {
  return (
    <section className="flex ">
      <Sidebar />
      <Outlet />
    </section>
  );
}
