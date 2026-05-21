import axiosInstance from "../services/axiosInstance";


// GET ALL VOCABULARY
export const getVocabularyApi = async () => {
  const response = await axiosInstance.get(
    "/vocabulary"
  );

  return response.data;
};


// GET SINGLE VOCABULARY
export const getVocabularyByIdApi = async (
  id
) => {
  const response = await axiosInstance.get(
    `/vocabulary/${id}`
  );

  return response.data;
};


// SEARCH VOCABULARY
export const searchVocabularyApi = async (
  keyword
) => {
  const response = await axiosInstance.get(
    `/vocabulary/search?keyword=${keyword}`
  );

  return response.data;
};


// CREATE VOCABULARY
export const createVocabularyApi = async (
  data
) => {
  const response = await axiosInstance.post(
    "/vocabulary/create",
    data
  );

  return response.data;
};