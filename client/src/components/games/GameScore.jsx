const GameScore = ({
  score,
  title,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="text-5xl font-bold mt-5">
        {score}
      </p>

    </div>
  );
};

export default GameScore;