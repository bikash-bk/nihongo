import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">

      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-[200px] object-cover"
      />

      <div className="p-5">

        <h2 className="text-2xl font-bold">
          {course.title}
        </h2>

        <p className="text-gray-600 mt-2">
          {course.description}
        </p>

        <div className="mt-4 flex justify-between items-center">

          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            {course.level}
          </span>

          <Link
            to={`/student/courses/${course._id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            View
          </Link>

        </div>

      </div>
    </div>
  );
};

export default CourseCard;