import { useEffect, useState } from "react";

import { getQuizzesApi } from "../../api/quizApi";

import QuizCard from "../../components/quiz/QuizCard";

const Quiz = () => {

  const [quizzes, setQuizzes] =
    useState([]);

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    try {
      const data =
        await getQuizzesApi();

      setQuizzes(data.quizzes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <h1 className="text-4xl font-bold mb-10">
        Japanese Quizzes
      </h1>

      <div className="grid grid-cols-2 gap-6">

        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz._id}
            quiz={quiz}
          />
        ))}

      </div>

    </div>
  );
};

export default Quiz;