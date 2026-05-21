import { useState } from "react";

const words = [
  {
    japanese: "あ",
    romaji: "a",
  },
  {
    japanese: "い",
    romaji: "i",
  },
  {
    japanese: "う",
    romaji: "u",
  },
  {
    japanese: "え",
    romaji: "e",
  },
  {
    japanese: "お",
    romaji: "o",
  },
];

const HiraganaGame = () => {

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [input, setInput] =
    useState("");

  const [score, setScore] =
    useState(0);

  const [message, setMessage] =
    useState("");


  const checkAnswer = () => {
    if (
      input.toLowerCase() ===
      words[currentIndex].romaji
    ) {
      setScore(score + 10);

      setMessage("Correct 🎉");
    } else {
      setMessage("Wrong ❌");
    }

    setInput("");

    if (
      currentIndex <
      words.length - 1
    ) {
      setCurrentIndex(
        currentIndex + 1
      );
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-10">

      <h1 className="text-3xl font-bold mb-8">
        Hiragana Typing Game
      </h1>

      <div className="text-center">

        <h2 className="text-8xl font-bold">
          {
            words[currentIndex]
              .japanese
          }
        </h2>

        <input
          type="text"
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          placeholder="Type Romaji"
          className="border p-4 rounded-xl mt-10 w-full"
        />

        <button
          onClick={checkAnswer}
          className="bg-black text-white px-8 py-4 rounded-xl mt-6"
        >
          Check
        </button>

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

export default HiraganaGame;