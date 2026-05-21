import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import {
  getQuizApi,
  submitQuizApi,
} from "../../api/quizApi";

import QuizResult from "../../components/quiz/QuizResult";

const QuizPlay = () => {

  const { id } = useParams();

  const [quiz, setQuiz] = useState(null);

  const [answers, setAnswers] =
    useState([]);

  const [score, setScore] =
    useState(null);

  const [timeLeft, setTimeLeft] =
    useState(300);


  useEffect(() => {
    fetchQuiz();
  }, []);


  useEffect(() => {
    if (timeLeft > 0 && score === null) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeLeft, score]);


  const fetchQuiz = async () => {
    try {
      const data =
        await getQuizApi(id);

      setQuiz(data.quiz);
    } catch (error) {
      console.log(error);
    }
  };


  const handleAnswer = (
    questionIndex,
    option
  ) => {
    const updatedAnswers = [
      ...answers,
    ];

    updatedAnswers[questionIndex] =
      option;

    setAnswers(updatedAnswers);
  };


  const submitQuiz = async () => {
    try {
      const data =
        await submitQuizApi(
          id,
          answers
        );

      setScore(data.score);
    } catch (error) {
      console.log(error);
    }
  };


  const restartQuiz = () => {
    setScore(null);

    setAnswers([]);

    setTimeLeft(300);
  };


  if (!quiz) {
    return <h1>Loading...</h1>;
  }


  if (score !== null) {
    return (
      <QuizResult
        score={score}
        total={quiz.questions.length}
        restartQuiz={restartQuiz}
      />
    );
  }

  return (
    <div className="max-w-[900px] mx-auto">

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-4xl font-bold">
            {quiz.title}
          </h1>

          <p className="text-gray-500 mt-2">
            {quiz.description}
          </p>

        </div>

        <div className="bg-black text-white px-6 py-3 rounded-xl text-xl">

          {Math.floor(timeLeft / 60)}:
          {String(timeLeft % 60).padStart(
            2,
            "0"
          )}

        </div>

      </div>


      {quiz.questions.map(
        (question, questionIndex) => (
          <div
            key={questionIndex}
            className="bg-white p-6 rounded-2xl shadow-lg mb-8"
          >

            <h2 className="text-2xl font-bold">

              {questionIndex + 1}.{" "}
              {question.question}

            </h2>

            <div className="mt-6 flex flex-col gap-4">

              {question.options.map(
                (option, optionIndex) => (
                  <button
                    key={optionIndex}
                    onClick={() =>
                      handleAnswer(
                        questionIndex,
                        option
                      )
                    }
                    className={`border p-4 rounded-xl text-left transition ${
                      answers[
                        questionIndex
                      ] === option
                        ? "bg-black text-white"
                        : "bg-white"
                    }`}
                  >

                    {option}

                  </button>
                )
              )}

            </div>

          </div>
        )
      )}


      <button
        onClick={submitQuiz}
        className="bg-green-500 text-white px-8 py-4 rounded-xl text-xl"
      >
        Submit Quiz
      </button>

    </div>
  );
};

export default QuizPlay;