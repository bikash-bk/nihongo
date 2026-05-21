import axiosInstance from "../services/axiosInstance";


// GET QUIZZES
export const getQuizzesApi = async () => {
  const response =
    await axiosInstance.get("/quizzes");

  return response.data;
};


// GET SINGLE QUIZ
export const getQuizApi = async (id) => {
  const response =
    await axiosInstance.get(
      `/quizzes/${id}`
    );

  return response.data;
};


// SUBMIT QUIZ
export const submitQuizApi = async (
  id,
  answers
) => {
  const response =
    await axiosInstance.post(
      `/quizzes/submit/${id}`,
      {
        answers,
      }
    );

  return response.data;
};


// CREATE QUIZ
export const createQuizApi = async (
  data
) => {
  const response =
    await axiosInstance.post(
      "/quizzes/create",
      data
    );

  return response.data;
};