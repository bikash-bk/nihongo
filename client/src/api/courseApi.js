import axiosInstance from "../services/axiosInstance";


// GET COURSES
export const getCoursesApi = async () => {
  const response = await axiosInstance.get("/courses");

  return response.data;
};


// GET SINGLE COURSE
export const getCourseApi = async (id) => {
  const response = await axiosInstance.get(
    `/courses/${id}`
  );

  return response.data;
};


// CREATE COURSE
export const createCourseApi = async (data) => {
  const response = await axiosInstance.post(
    "/courses/create",
    data
  );

  return response.data;
};


// ENROLL COURSE
export const enrollCourseApi = async (id) => {
  const response = await axiosInstance.post(
    `/courses/enroll/${id}`
  );

  return response.data;
};