import { Link } from "react-router-dom";

const QuizCard = ({ quiz }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
        {quiz.level}
      </span>

      <h1 className="text-3xl font-bold mt-5">
        {quiz.title}
      </h1>

      <p className="text-gray-600 mt-4">
        {quiz.description}
      </p>

      <div className="flex justify-between items-center mt-8">

        <span className="text-gray-500">
          {quiz.questions.length} Questions
        </span>

        <Link
          to={`/student/quiz/${quiz._id}`}
          className="bg-black text-white px-5 py-3 rounded-xl"
        >
          Start Quiz
        </Link>

      </div>

    </div>
  );
};

export default QuizCard;