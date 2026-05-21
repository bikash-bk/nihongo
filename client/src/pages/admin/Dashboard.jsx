import { useEffect, useState } from "react";

import axiosInstance from "../../services/axiosInstance";

import StatsCard from "../../components/dashboard/StatsCard";

const Dashboard = () => {

  const [stats, setStats] =
    useState(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response =
        await axiosInstance.get(
          "/dashboard/admin"
        );

      setStats(response.data.stats);
    } catch (error) {
      console.log(error);
    }
  };

  if (!stats) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>

      <div className="mb-10">

        <h1 className="text-4xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Platform analytics &
          management.
        </p>

      </div>

      <div className="grid grid-cols-4 gap-6">

        <StatsCard
          title="Users"
          value={stats.users}
          color="bg-black"
        />

        <StatsCard
          title="Courses"
          value={stats.courses}
          color="bg-blue-500"
        />

        <StatsCard
          title="Lessons"
          value={stats.lessons}
          color="bg-green-500"
        />

        <StatsCard
          title="Vocabulary"
          value={stats.vocabulary}
          color="bg-purple-500"
        />

      </div>

    </div>
  );
};

export default Dashboard;