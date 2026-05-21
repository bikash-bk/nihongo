import { useState } from "react";

const cardsData = [
  "あ",
  "い",
  "う",
  "え",
  "あ",
  "い",
  "う",
  "え",
];

const shuffledCards =
  [...cardsData].sort(
    () => Math.random() - 0.5
  );

const MemoryGame = () => {

  const [flipped, setFlipped] =
    useState([]);

  const [matched, setMatched] =
    useState([]);

  const [score, setScore] =
    useState(0);

  const handleFlip = (index) => {

    if (
      flipped.length === 2 ||
      flipped.includes(index)
    ) {
      return;
    }

    const updatedFlipped = [
      ...flipped,
      index,
    ];

    setFlipped(updatedFlipped);

    if (updatedFlipped.length === 2) {

      const first =
        shuffledCards[
          updatedFlipped[0]
        ];

      const second =
        shuffledCards[
          updatedFlipped[1]
        ];

      if (first === second) {

        setMatched([
          ...matched,
          ...updatedFlipped,
        ]);

        setScore(score + 20);
      }

      setTimeout(() => {
        setFlipped([]);
      }, 1000);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-10">

      <h1 className="text-3xl font-bold mb-10">
        Memory Matching Game
      </h1>

      <div className="grid grid-cols-4 gap-5">

        {shuffledCards.map(
          (card, index) => (
            <div
              key={index}
              onClick={() =>
                handleFlip(index)
              }
              className="h-[100px] bg-black text-white rounded-xl flex justify-center items-center text-5xl cursor-pointer"
            >

              {flipped.includes(index) ||
              matched.includes(index)
                ? card
                : "?"}

            </div>
          )
        )}

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

export default MemoryGame;