const AchievementCard = ({
  achievement,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold">
        🏆 {achievement}
      </h2>

    </div>
  );
};

export default AchievementCard;