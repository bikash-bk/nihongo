import { useEffect, useState } from "react";

import { getLessonsApi } from "../../api/lessonApi";

import {
  createVocabularyApi,
} from "../../api/vocabularyApi";

const Vocabulary = () => {

  const [lessons, setLessons] = useState([]);

  const [formData, setFormData] = useState({
    japaneseWord: "",
    romaji: "",
    meaning: "",
    exampleSentence: "",
    exampleMeaning: "",
    audioUrl: "",
    jlptLevel: "N5",
    lesson: "",
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data =
        await createVocabularyApi(formData);

      alert(data.message);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Create Vocabulary
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg p-6"
      >

        <input
          type="text"
          name="japaneseWord"
          placeholder="Japanese Word"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="text"
          name="romaji"
          placeholder="Romaji"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="text"
          name="meaning"
          placeholder="Meaning"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <textarea
          name="exampleSentence"
          placeholder="Example Sentence"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <textarea
          name="exampleMeaning"
          placeholder="Example Meaning"
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

        <select
          name="jlptLevel"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        >
          <option value="N5">N5</option>
          <option value="N4">N4</option>
          <option value="N3">N3</option>
          <option value="N2">N2</option>
          <option value="N1">N1</option>
        </select>

        <select
          name="lesson"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        >

          <option value="">
            Select Lesson
          </option>

          {lessons.map((lesson) => (
            <option
              key={lesson._id}
              value={lesson._id}
            >
              {lesson.title}
            </option>
          ))}

        </select>

        <button className="bg-black text-white px-6 py-3 rounded">
          Create Vocabulary
        </button>

      </form>
    </div>
  );
};

export default Vocabulary;