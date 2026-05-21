import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getLessonApi } from "../../api/lessonApi";

const LessonDetails = () => {

  const { id } = useParams();

  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    fetchLesson();
  }, []);

  const fetchLesson = async () => {
    try {
      const data = await getLessonApi(id);

      setLesson(data.lesson);
    } catch (error) {
      console.log(error);
    }
  };

  if (!lesson) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>

      <h1 className="text-4xl font-bold">
        {lesson.title}
      </h1>

      <p className="text-gray-600 mt-4 text-lg">
        {lesson.description}
      </p>


      {/* VIDEO */}
      <div className="mt-8">

        <iframe
          width="100%"
          height="500"
          src={lesson.videoUrl}
          title="Lesson Video"
          allowFullScreen
          className="rounded-xl"
        ></iframe>

      </div>


      {/* AUDIO */}
      <div className="mt-8">

        <h2 className="text-2xl font-bold mb-3">
          Pronunciation
        </h2>

        <audio controls className="w-full">
          <source
            src={lesson.audioUrl}
            type="audio/mpeg"
          />
        </audio>

      </div>


      {/* NOTES */}
      <div className="bg-white p-6 rounded-xl shadow mt-8">

        <h2 className="text-2xl font-bold mb-4">
          Notes
        </h2>

        <p className="text-gray-700 leading-8">
          {lesson.notes}
        </p>

      </div>


      {/* JAPANESE EXAMPLE */}
      <div className="bg-blue-50 p-6 rounded-xl mt-8">

        <h2 className="text-2xl font-bold mb-4">
          Japanese Example
        </h2>

        <p className="text-3xl font-semibold">
          {lesson.japaneseSentence}
        </p>

        <p className="text-lg text-gray-700 mt-3">
          {lesson.englishMeaning}
        </p>

      </div>

    </div>
  );
};

export default LessonDetails;