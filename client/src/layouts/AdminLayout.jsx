import AdminSidebar from "../components/layout/AdminSidebar";
import Navbar from "../components/layout/Navbar";

import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex">

      <AdminSidebar />

      <div className="ml-[250px] w-full">

        <Navbar />

        <div className="p-8">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default AdminLayout;