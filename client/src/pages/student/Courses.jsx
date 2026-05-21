import { useEffect, useState } from "react";

import { getCoursesApi } from "../../api/courseApi";

import CourseCard from "../../components/cards/CourseCard";

const Courses = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const data = await getCoursesApi();

      setCourses(data.courses);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Japanese Courses
      </h1>

      <div className="grid grid-cols-3 gap-6">

        {courses.map((course) => (
          <CourseCard
            key={course._id}
            course={course}
          />
        ))}

      </div>
    </div>
  );
};

export default Courses;