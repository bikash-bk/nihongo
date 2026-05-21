const QuizResult = ({
  score,
  total,
  restartQuiz,
}) => {
  return (
    <div className="bg-white p-10 rounded-2xl shadow-xl text-center">

      <h1 className="text-5xl font-bold">
        Quiz Finished 🎉
      </h1>

      <p className="text-2xl mt-8">
        Your Score
      </p>

      <h2 className="text-7xl font-bold mt-5">
        {score}/{total}
      </h2>

      <button
        onClick={restartQuiz}
        className="bg-black text-white px-8 py-4 rounded-xl mt-10"
      >
        Restart Quiz
      </button>

    </div>
  );
};

export default QuizResult;