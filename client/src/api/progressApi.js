import axiosInstance from "../services/axiosInstance";


// GET USER PROGRESS
export const getProgressApi =
  async () => {
    const response =
      await axiosInstance.get(
        "/progress/me"
      );

    return response.data;
  };


// COMPLETE LESSON
export const completeLessonApi =
  async (lessonId) => {
    const response =
      await axiosInstance.post(
        `/progress/lesson/${lessonId}`
      );

    return response.data;
  };


// COMPLETE QUIZ
export const completeQuizApi =
  async (quizId) => {
    const response =
      await axiosInstance.post(
        `/progress/quiz/${quizId}`
      );

    return response.data;
  };


// LEADERBOARD
export const getLeaderboardApi =
  async () => {
    const response =
      await axiosInstance.get(
        "/progress/leaderboard"
      );

    return response.data;
  };