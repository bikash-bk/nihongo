import { useState } from "react";

const questions = [
  {
    character: "ア",
    answer: "a",
  },
  {
    character: "イ",
    answer: "i",
  },
  {
    character: "ウ",
    answer: "u",
  },
  {
    character: "エ",
    answer: "e",
  },
];

const KatakanaGame = () => {

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [score, setScore] =
    useState(0);

  const [message, setMessage] =
    useState("");

  const handleAnswer = (option) => {

    if (
      option ===
      questions[currentIndex]
        .answer
    ) {
      setScore(score + 10);

      setMessage("Correct 🎉");
    } else {
      setMessage("Wrong ❌");
    }

    if (
      currentIndex <
      questions.length - 1
    ) {
      setCurrentIndex(
        currentIndex + 1
      );
    }
  };

  const options = [
    "a",
    "i",
    "u",
    "e",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-10">

      <h1 className="text-3xl font-bold mb-8">
        Katakana Quiz Game
      </h1>

      <div className="text-center">

        <h2 className="text-8xl font-bold">
          {
            questions[currentIndex]
              .character
          }
        </h2>

        <div className="grid grid-cols-2 gap-5 mt-10">

          {options.map((option) => (
            <button
              key={option}
              onClick={() =>
                handleAnswer(option)
              }
              className="bg-black text-white p-5 rounded-xl text-xl"
            >
              {option}
            </button>
          ))}

        </div>

        <p className="mt-6 text-2xl">
          {message}
        </p>

      </div>

      <div className="mt-10">

        <GameScore
          score={score}
          title="Score"
        />

      </div>

    </div>
  );
};

export default KatakanaGame;