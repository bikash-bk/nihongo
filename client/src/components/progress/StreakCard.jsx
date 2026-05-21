const StreakCard = ({ streak }) => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl shadow-xl p-8">

      <h2 className="text-2xl font-bold">
        Daily Streak
      </h2>

      <h1 className="text-6xl font-bold mt-5">
        🔥 {streak}
      </h1>

      <p className="text-xl mt-4">
        Keep learning daily!
      </p>

    </div>
  );
};

export default StreakCard;