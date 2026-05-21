import axiosInstance from "../services/axiosInstance";


// GET ALL LESSONS
export const getLessonsApi = async () => {
  const response = await axiosInstance.get(
    "/lessons"
  );

  return response.data;
};


// GET SINGLE LESSON
export const getLessonApi = async (id) => {
  const response = await axiosInstance.get(
    `/lessons/${id}`
  );

  return response.data;
};


// GET LESSONS BY COURSE
export const getLessonsByCourseApi = async (
  courseId
) => {
  const response = await axiosInstance.get(
    `/lessons/course/${courseId}`
  );

  return response.data;
};


// CREATE LESSON
export const createLessonApi = async (data) => {
  const response = await axiosInstance.post(
    "/lessons/create",
    data
  );

  return response.data;
};