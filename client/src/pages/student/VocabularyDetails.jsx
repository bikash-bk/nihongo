import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import {
  getVocabularyByIdApi,
} from "../../api/vocabularyApi";

const VocabularyDetails = () => {

  const { id } = useParams();

  const [word, setWord] = useState(null);

  useEffect(() => {
    fetchWord();
  }, []);

  const fetchWord = async () => {
    try {
      const data =
        await getVocabularyByIdApi(id);

      setWord(data.vocabulary);
    } catch (error) {
      console.log(error);
    }
  };

  if (!word) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="max-w-[900px]">

      <div className="bg-white rounded-2xl shadow-lg p-8">

        <div className="flex justify-between items-center">

          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">
            {word.jlptLevel}
          </span>

          <button
            onClick={() => {
              const audio = new Audio(
                word.audioUrl
              );

              audio.play();
            }}
            className="bg-black text-white px-5 py-2 rounded"
          >
            Play Audio
          </button>

        </div>

        <h1 className="text-6xl font-bold mt-8">
          {word.japaneseWord}
        </h1>

        <p className="text-2xl text-gray-500 mt-3">
          {word.romaji}
        </p>

        <p className="text-3xl mt-6">
          {word.meaning}
        </p>


        {/* EXAMPLE */}
        <div className="bg-gray-100 p-6 rounded-xl mt-10">

          <h2 className="text-2xl font-bold mb-5">
            Example Sentence
          </h2>

          <p className="text-3xl">
            {word.exampleSentence}
          </p>

          <p className="text-xl text-gray-700 mt-4">
            {word.exampleMeaning}
          </p>

        </div>

      </div>
    </div>
  );
};

export default VocabularyDetails;