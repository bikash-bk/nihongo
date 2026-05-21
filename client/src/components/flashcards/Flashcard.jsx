import { useState } from "react";

const Flashcard = ({ word }) => {

  const [flipped, setFlipped] = useState(false);

  const playAudio = () => {
    const audio = new Audio(word.audioUrl);

    audio.play();
  };

  return (
    <div className="flex flex-col items-center">

      {/* FLASHCARD */}
      <div
        onClick={() => setFlipped(!flipped)}
        className="w-[500px] h-[300px] cursor-pointer perspective"
      >

        <div
          className={`relative w-full h-full duration-500 transform-style-preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
        >

          {/* FRONT */}
          <div className="absolute w-full h-full bg-white rounded-2xl shadow-xl flex flex-col justify-center items-center backface-hidden">

            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full absolute top-5 left-5">
              {word.jlptLevel}
            </span>

            <h1 className="text-6xl font-bold">
              {word.japaneseWord}
            </h1>

            <p className="text-2xl text-gray-500 mt-5">
              {word.romaji}
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation();

                playAudio();
              }}
              className="bg-black text-white px-5 py-2 rounded mt-8"
            >
              🔊 Play Audio
            </button>

          </div>


          {/* BACK */}
          <div className="absolute w-full h-full bg-black text-white rounded-2xl shadow-xl flex flex-col justify-center items-center rotate-y-180 backface-hidden px-8">

            <h2 className="text-4xl font-bold">
              {word.meaning}
            </h2>

            <div className="mt-8 text-center">

              <p className="text-2xl">
                {word.exampleSentence}
              </p>

              <p className="text-lg text-gray-300 mt-4">
                {word.exampleMeaning}
              </p>

            </div>

          </div>

        </div>

      </div>

      <p className="mt-6 text-gray-500">
        Click card to flip
      </p>

    </div>
  );
};

export default Flashcard;