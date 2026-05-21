import {
  FaChartBar,
  FaCog,
  FaHome,
  FaUsers,
  FaBook,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="w-[250px] h-screen bg-black text-white p-5 fixed">

      <h1 className="text-2xl font-bold mb-10">
        Admin Panel
      </h1>

      <div className="flex flex-col gap-4">

        <Link
          to="/admin/dashboard"
          className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded"
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          to="/admin/users"
          className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded"
        >
          <FaUsers />
          Users
        </Link>

        <Link
          to="/admin/courses"
          className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded"
        >
          <FaBook />
          Courses
        </Link>

        <Link
          to="/admin/analytics"
          className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded"
        >
          <FaChartBar />
          Analytics
        </Link>

        <Link
          to="/admin/settings"
          className="flex items-center gap-3 hover:bg-gray-800 p-3 rounded"
        >
          <FaCog />
          Settings
        </Link>

      </div>
    </div>
  );
};

export default AdminSidebar;