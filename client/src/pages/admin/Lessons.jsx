import { useEffect, useState } from "react";

import { createLessonApi } from "../../api/lessonApi";

import { getCoursesApi } from "../../api/courseApi";

const Lessons = () => {

  const [courses, setCourses] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    videoUrl: "",
    audioUrl: "",
    notes: "",
    japaneseSentence: "",
    englishMeaning: "",
    course: "",
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await createLessonApi(
        formData
      );

      alert(data.message);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Create Lesson
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg"
      >

        <input
          type="text"
          name="title"
          placeholder="Lesson Title"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <textarea
          name="description"
          placeholder="Lesson Description"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="text"
          name="videoUrl"
          placeholder="YouTube Embed URL"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="text"
          name="audioUrl"
          placeholder="Audio URL"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <textarea
          name="notes"
          placeholder="Lesson Notes"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4 h-[150px]"
        />

        <input
          type="text"
          name="japaneseSentence"
          placeholder="Japanese Sentence"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="text"
          name="englishMeaning"
          placeholder="English Meaning"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <select
          name="course"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        >

          <option value="">
            Select Course
          </option>

          {courses.map((course) => (
            <option
              key={course._id}
              value={course._id}
            >
              {course.title}
            </option>
          ))}

        </select>

        <button className="bg-black text-white px-6 py-3 rounded">
          Create Lesson
        </button>

      </form>
    </div>
  );
};

export default Lessons;