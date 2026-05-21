import { useState } from "react";

import { createCourseApi } from "../../api/courseApi";

const Courses = () => {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    level: "N5",
    thumbnail: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await createCourseApi(formData);

      alert(data.message);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Create Course
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg max-w-[600px]"
      >

        <input
          type="text"
          name="title"
          placeholder="Course Title"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="text"
          name="thumbnail"
          placeholder="Thumbnail URL"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <select
          name="level"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        >
          <option value="N5">N5</option>
          <option value="N4">N4</option>
          <option value="N3">N3</option>
          <option value="N2">N2</option>
          <option value="N1">N1</option>
        </select>

        <button className="bg-black text-white px-6 py-3 rounded">
          Create Course
        </button>

      </form>
    </div>
  );
};

export default Courses;