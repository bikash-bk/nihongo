import { useEffect, useState } from "react";

import { getVocabularyApi } from "../../api/vocabularyApi";

import Flashcard from "../../components/flashcards/Flashcard";

const Flashcards = () => {

  const [vocabulary, setVocabulary] = useState([]);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  useEffect(() => {
    fetchVocabulary();
  }, []);

  const fetchVocabulary = async () => {
    try {
      const data = await getVocabularyApi();

      setVocabulary(data.vocabulary);
    } catch (error) {
      console.log(error);
    }
  };

  const nextCard = () => {
    if (
      currentIndex < vocabulary.length - 1
    ) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const randomCard = () => {
    const random =
      Math.floor(
        Math.random() * vocabulary.length
      );

    setCurrentIndex(random);
  };

  if (vocabulary.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-col items-center">

      <h1 className="text-4xl font-bold mb-10">
        Flashcards Study Mode
      </h1>

      <Flashcard
        word={vocabulary[currentIndex]}
      />

      {/* CONTROLS */}
      <div className="flex gap-5 mt-10">

        <button
          onClick={previousCard}
          className="bg-gray-200 px-6 py-3 rounded-lg"
        >
          Previous
        </button>

        <button
          onClick={randomCard}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg"
        >
          Random
        </button>

        <button
          onClick={nextCard}
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Next
        </button>

      </div>

      {/* PROGRESS */}
      <p className="mt-8 text-lg text-gray-600">

        Card {currentIndex + 1} of{" "}
        {vocabulary.length}

      </p>

    </div>
  );
};

export default Flashcards;