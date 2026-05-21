import { useEffect, useState } from "react";

import {
  getVocabularyApi,
  searchVocabularyApi,
} from "../../api/vocabularyApi";

import VocabularyCard from "../../components/cards/VocabularyCard";

const Vocabulary = () => {

  const [vocabulary, setVocabulary] = useState([]);

  const [search, setSearch] = useState("");

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

  const handleSearch = async (e) => {
    const keyword = e.target.value;

    setSearch(keyword);

    try {
      const data = await searchVocabularyApi(
        keyword
      );

      setVocabulary(data.vocabulary);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Vocabulary
        </h1>

        <input
  type="text"
  placeholder="Search Japanese Word..."
  value={search}
  onChange={handleSearch}
  className="bg-white/10 border border-white/10 text-white placeholder:text-gray-400 p-3 rounded-xl w-[300px] outline-none"
/>

      </div>

      <div className="grid grid-cols-3 gap-6 text-gray-800">

        {vocabulary.map((word) => (
          <VocabularyCard
            key={word._id}
            word={word}
          />
        ))}

      </div>
    </div>
  );
};

export default Vocabulary;