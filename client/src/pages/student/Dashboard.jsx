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
          "/dashboard/student"
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

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-4xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="text-gray-500 mt-2">
            Continue your Japanese
            journey.
          </p>

        </div>

      </div>


      {/* STATS */}
      <div className="grid grid-cols-5 gap-6">

        <StatsCard
          title="Courses"
          value={stats.courses}
          color="bg-blue-500"
        />

        <StatsCard
          title="Lessons"
          value={stats.lessons}
          color="bg-purple-500"
        />

        <StatsCard
          title="Vocabulary"
          value={stats.vocabulary}
          color="bg-green-500"
        />

        <StatsCard
          title="XP"
          value={stats.xp}
          color="bg-orange-500"
        />

        <StatsCard
          title="Streak"
          value={stats.streak}
          color="bg-pink-500"
        />

      </div>

    </div>
  );
};

export default Dashboard;