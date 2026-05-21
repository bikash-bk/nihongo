import { useState } from "react";

import { createQuizApi } from "../../api/quizApi";

const QuizManagement = () => {

  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      level: "N5",
      questions: [
        {
          question: "",
          options: ["", "", "", ""],
          correctAnswer: "",
        },
      ],
    });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };


  const handleQuestionChange = (
    index,
    field,
    value
  ) => {
    const updatedQuestions = [
      ...formData.questions,
    ];

    updatedQuestions[index][field] =
      value;

    setFormData({
      ...formData,
      questions: updatedQuestions,
    });
  };


  const handleOptionChange = (
    questionIndex,
    optionIndex,
    value
  ) => {
    const updatedQuestions = [
      ...formData.questions,
    ];

    updatedQuestions[
      questionIndex
    ].options[optionIndex] = value;

    setFormData({
      ...formData,
      questions: updatedQuestions,
    });
  };


  const addQuestion = () => {
    setFormData({
      ...formData,
      questions: [
        ...formData.questions,

        {
          question: "",
          options: ["", "", "", ""],
          correctAnswer: "",
        },
      ],
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data =
        await createQuizApi(
          formData
        );

      alert(data.message);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>

      <h1 className="text-4xl font-bold mb-10">
        Quiz Management
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-8"
      >

        <input
          type="text"
          name="title"
          placeholder="Quiz Title"
          onChange={handleChange}
          className="w-full border p-4 rounded-xl mb-5"
        />

        <textarea
          name="description"
          placeholder="Quiz Description"
          onChange={handleChange}
          className="w-full border p-4 rounded-xl mb-5"
        />

        <select
          name="level"
          onChange={handleChange}
          className="w-full border p-4 rounded-xl mb-8"
        >
          <option value="N5">N5</option>
          <option value="N4">N4</option>
          <option value="N3">N3</option>
          <option value="N2">N2</option>
          <option value="N1">N1</option>
        </select>


        {formData.questions.map(
          (question, index) => (
            <div
              key={index}
              className="border rounded-2xl p-6 mb-8"
            >

              <h2 className="text-2xl font-bold mb-5">
                Question {index + 1}
              </h2>

              <input
                type="text"
                placeholder="Question"
                onChange={(e) =>
                  handleQuestionChange(
                    index,
                    "question",
                    e.target.value
                  )
                }
                className="w-full border p-4 rounded-xl mb-5"
              />

              {question.options.map(
                (option, optionIndex) => (
                  <input
                    key={optionIndex}
                    type="text"
                    placeholder={`Option ${
                      optionIndex + 1
                    }`}
                    onChange={(e) =>
                      handleOptionChange(
                        index,
                        optionIndex,
                        e.target.value
                      )
                    }
                    className="w-full border p-4 rounded-xl mb-4"
                  />
                )
              )}

              <input
                type="text"
                placeholder="Correct Answer"
                onChange={(e) =>
                  handleQuestionChange(
                    index,
                    "correctAnswer",
                    e.target.value
                  )
                }
                className="w-full border p-4 rounded-xl"
              />

            </div>
          )
        )}


        <div className="flex gap-5">

          <button
            type="button"
            onClick={addQuestion}
            className="bg-blue-500 text-white px-6 py-3 rounded-xl"
          >
            Add Question
          </button>

          <button className="bg-black text-white px-8 py-3 rounded-xl">
            Create Quiz
          </button>

        </div>

      </form>

    </div>
  );
};

export default QuizManagement;