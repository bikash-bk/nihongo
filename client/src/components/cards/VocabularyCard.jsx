import { Link } from "react-router-dom";

const VocabularyCard = ({ word }) => {

  const playAudio = () => {
    const audio = new Audio(word.audioUrl);

    audio.play();
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-5">

      <div className="flex justify-between items-center">

        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
          {word.jlptLevel}
        </span>

        <button
          onClick={playAudio}
          className="bg-black text-white px-3 py-2 rounded"
        >
          🔊
        </button>

      </div>

      <h1 className="text-4xl font-bold mt-5">
        {word.japaneseWord}
      </h1>

      <p className="text-gray-500 text-xl mt-2">
        {word.romaji}
      </p>

      <p className="text-2xl mt-4">
        {word.meaning}
      </p>

      <div className="mt-5">

        <Link
          to={`/student/vocabulary/${word._id}`}
          className="bg-blue-500 text-white px-5 py-2 rounded"
        >
          View Details
        </Link>

      </div>

    </div>
  );
};

export default VocabularyCard;