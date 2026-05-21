import StudentSidebar from "../components/layout/StudentSidebar";

import Navbar from "../components/layout/Navbar";

import { Outlet } from "react-router-dom";

const StudentLayout = () => {
  return (
    <div className="bg-[#020617] min-h-screen">

      <StudentSidebar />

      <div className="ml-[280px]">

        <Navbar />

        <div className="p-10 text-white">

          <Outlet />

        </div>

      </div>

    </div>
  );
};

export default StudentLayout;