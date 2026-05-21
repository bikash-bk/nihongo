import { useEffect, useState } from "react";

import {
  getProgressApi,
  getLeaderboardApi,
} from "../../api/progressApi";

import XPCard from "../../components/progress/XPCard";

import StreakCard from "../../components/progress/StreakCard";

import ProgressChart from "../../components/progress/ProgressChart";

import AchievementCard from "../../components/progress/AchievementCard";

const Progress = () => {

  const [progress, setProgress] =
    useState(null);

  const [leaderboard, setLeaderboard] =
    useState([]);


  useEffect(() => {
    fetchProgress();

    fetchLeaderboard();
  }, []);


  const fetchProgress = async () => {
    try {
      const data =
        await getProgressApi();

      setProgress(data.progress);
    } catch (error) {
      console.log(error);
    }
  };


  const fetchLeaderboard =
    async () => {
      try {
        const data =
          await getLeaderboardApi();

        setLeaderboard(
          data.leaderboard
        );
      } catch (error) {
        console.log(error);
      }
    };


  if (!progress) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>

      <div className="mb-10">

        <h1 className="text-5xl font-bold">
          Your Progress
        </h1>

        <p className="text-gray-500 mt-3">
          Track your Japanese
          learning journey.
        </p>

      </div>


      {/* TOP CARDS */}
      <div className="grid grid-cols-2 gap-8">

        <XPCard
          xp={progress.xp}
          level={progress.level}
        />

        <StreakCard
          streak={progress.streak}
        />

      </div>


      {/* CHART */}
      <div className="mt-10">

        <ProgressChart
          completedLessons={
            progress
              .completedLessons
              .length
          }
          completedQuizzes={
            progress
              .completedQuizzes
              .length
          }
        />

      </div>


      {/* ACHIEVEMENTS */}
      <div className="mt-10">

        <h2 className="text-4xl font-bold mb-8">
          Achievements
        </h2>

        <div className="grid grid-cols-3 gap-6">

          {progress.achievements.map(
            (achievement, index) => (
              <AchievementCard
                key={index}
                achievement={
                  achievement
                }
              />
            )
          )}

        </div>

      </div>


      {/* LEADERBOARD */}
      <div className="mt-14">

        <h2 className="text-4xl font-bold mb-8">
          Leaderboard
        </h2>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden text-gray-800">

          <table className="w-full">

            <thead className="bg-black text-white">

              <tr>

                <th className="p-5 text-left">
                  Rank
                </th>

                <th className="p-5 text-left">
                  Username
                </th>

                <th className="p-5 text-left">
                  XP
                </th>

              </tr>

            </thead>

            <tbody>

              {leaderboard.map(
                (user, index) => (
                  <tr
                    key={user._id}
                    className="border-b"
                  >

                    <td className="p-5">
                      #{index + 1}
                    </td>

                    <td className="p-5">
                      {
                        user.user
                          ?.username
                      }
                    </td>

                    <td className="p-5">
                      {user.xp}
                    </td>

                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Progress;