import { useState } from "react";

import HiraganaGame from "../../components/games/HiraganaGame";

import KatakanaGame from "../../components/games/KatakanaGame";

import MemoryGame from "../../components/games/MemoryGame";

const Games = () => {

  const [selectedGame, setSelectedGame] =
    useState("hiragana");

  return (
    <div>

      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-4xl font-bold">
            Japanese Games
          </h1>

          <p className="text-gray-500 mt-2">
            Learn Japanese with fun
            interactive games.
          </p>

        </div>

      </div>


      {/* GAME SELECTOR */}
      <div className="flex gap-5 mb-10">

        <button
          onClick={() =>
            setSelectedGame(
              "hiragana"
            )
          }
          className={`px-6 py-3 rounded-xl ${
            selectedGame ===
            "hiragana"
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >
          Hiragana
        </button>

        <button
          onClick={() =>
            setSelectedGame(
              "katakana"
            )
          }
          className={`px-6 py-3 rounded-xl ${
            selectedGame ===
            "katakana"
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >
          Katakana
        </button>

        <button
          onClick={() =>
            setSelectedGame(
              "memory"
            )
          }
          className={`px-6 py-3 rounded-xl ${
            selectedGame ===
            "memory"
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >
          Memory Game
        </button>

      </div>


      {/* GAME UI */}
      {selectedGame ===
        "hiragana" && (
        <HiraganaGame />
      )}

      {selectedGame ===
        "katakana" && (
        <KatakanaGame />
      )}

      {selectedGame ===
        "memory" && (
        <MemoryGame />
      )}

    </div>
  );
};

export default Games;