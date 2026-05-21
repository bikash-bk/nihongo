import { useEffect, useState } from "react";

import {
  getCourseApi,
  enrollCourseApi,
} from "../../api/courseApi";

import { useParams } from "react-router-dom";

const CourseDetails = () => {

  const { id } = useParams();

  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {
      const data = await getCourseApi(id);

      setCourse(data.course);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEnroll = async () => {
    try {
      const data = await enrollCourseApi(id);

      alert(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  if (!course) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>

      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-[400px] object-cover rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-6">
        {course.title}
      </h1>

      <p className="text-gray-600 mt-4 text-lg">
        {course.description}
      </p>

      <button
        onClick={handleEnroll}
        className="bg-blue-500 text-white px-6 py-3 rounded mt-6"
      >
        Enroll Now
      </button>

    </div>
  );
};

export default CourseDetails;