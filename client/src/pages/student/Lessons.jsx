import { useEffect, useState } from "react";

import { getLessonsApi } from "../../api/lessonApi";

import LessonCard from "../../components/cards/LessonCard";

const Lessons = () => {

  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetchLessons();
  }, []);

  const fetchLessons = async () => {
    try {
      const data = await getLessonsApi();

      setLessons(data.lessons);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Japanese Lessons
      </h1>

      <div className="grid grid-cols-3 gap-6">

        {lessons.map((lesson) => (
          <LessonCard
            key={lesson._id}
            lesson={lesson}
          />
        ))}

      </div>
    </div>
  );
};

export default Lessons;