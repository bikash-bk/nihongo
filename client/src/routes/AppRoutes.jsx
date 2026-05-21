import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import StudentLayout from "../layouts/StudentLayout";
import AdminLayout from "../layouts/AdminLayout";

import Dashboard from "../pages/student/Dashboard";

import Courses from "../pages/student/Courses";
import CourseDetails from "../pages/student/CourseDetails";

import Lessons from "../pages/student/Lessons";
import LessonDetails from "../pages/student/LessonDetails";

import Vocabulary from "../pages/student/Vocabulary";
import VocabularyDetails from "../pages/student/VocabularyDetails";

import Flashcards from "../pages/student/Flashcards";

import Games from "../pages/student/Games";

import Quiz from "../pages/student/Quiz";

import AdminDashboard from "../pages/admin/Dashboard";

import Users from "../pages/admin/Users";

import Analytics from "../pages/admin/Analytics";

import Settings from "../pages/admin/Settings";

import AdminCourses from "../pages/admin/Courses";

import AdminLessons from "../pages/admin/Lessons";

import AdminVocabulary from "../pages/admin/Vocabulary";

import PrivateRoute from "./PrivateRoute";

import AdminRoute from "./AdminRoute";

import QuizPlay from "../pages/student/QuizPlay";

import QuizManagement from "../pages/admin/QuizManagement";

import Progress from "../pages/student/Progress";

import Home from "../pages/Home";



const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />


      {/* STUDENT */}
      <Route
        path="/student"
        element={
          <PrivateRoute>
            <StudentLayout />
          </PrivateRoute>
        }
      >

        <Route
          path="dashboard"
          element={<Dashboard />}
        />

        <Route
          path="courses"
          element={<Courses />}
        />

        <Route
          path="courses/:id"
          element={<CourseDetails />}
        />

        <Route
          path="lessons"
          element={<Lessons />}
        />

        <Route
          path="lessons/:id"
          element={<LessonDetails />}
        />

        <Route
          path="vocabulary"
          element={<Vocabulary />}
        />

        <Route
          path="vocabulary/:id"
          element={<VocabularyDetails />}
        />

        <Route
          path="flashcards"
          element={<Flashcards />}
        />

        <Route
          path="games"
          element={<Games />}
        />

        <Route
          path="quiz"
          element={<Quiz />}
        />

        <Route
  path="quiz/:id"
  element={<QuizPlay />}
/>


<Route
  path="progress"
  element={<Progress />}
/>

      </Route>


      {/* ADMIN */}
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }
      >

        <Route
          path="dashboard"
          element={<AdminDashboard />}
        />

        <Route
          path="users"
          element={<Users />}
        />

        <Route
          path="courses"
          element={<AdminCourses />}
        />

        <Route
          path="lessons"
          element={<AdminLessons />}
        />

        <Route
          path="vocabulary"
          element={<AdminVocabulary />}
        />

        <Route
          path="analytics"
          element={<Analytics />}
        />

        <Route
          path="settings"
          element={<Settings />}
        />

        <Route
  path="quiz-management"
  element={<QuizManagement />}
/>

      </Route>

    </Routes>
  );
};

export default AppRoutes;