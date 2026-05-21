const XPCard = ({
  xp,
  level,
}) => {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-2xl shadow-xl p-8">

      <h2 className="text-2xl font-bold">
        Total XP
      </h2>

      <h1 className="text-6xl font-bold mt-5">
        {xp}
      </h1>

      <p className="text-xl mt-4">
        Level {level}
      </p>

    </div>
  );
};

export default XPCard;