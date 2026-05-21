import { Link } from "react-router-dom";

const LessonCard = ({ lesson }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-lg">

      <h1 className="text-2xl font-bold">
        {lesson.title}
      </h1>

      <p className="text-gray-600 mt-3">
        {lesson.description}
      </p>

      <div className="mt-5 flex justify-between items-center">

        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
          {lesson.course?.level}
        </span>

        <Link
          to={`/student/lessons/${lesson._id}`}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Start Lesson
        </Link>

      </div>
    </div>
  );
};

export default LessonCard;