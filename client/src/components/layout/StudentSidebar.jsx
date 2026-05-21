import {
  FaBook,
  FaClone,
  FaGamepad,
  FaHome,
  FaLanguage,
  FaQuestionCircle,
  FaChartLine,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const StudentSidebar = () => {
  return (
    <motion.div
      initial={{
        x: -50,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      className="w-[280px] h-screen bg-[#0f172a] border-r border-white/10 text-white p-6 fixed overflow-y-auto"
    >

      <h1 className="text-3xl font-bold mb-14 bg-gradient-to-r from-indigo-400 to-pink-500 text-transparent bg-clip-text">

        NihongoHub

      </h1>

      <div className="flex flex-col gap-3">

        <Link
          to="/student/dashboard"
          className="hover:bg-white/10 p-4 rounded-2xl transition flex items-center gap-4"
        >
          <FaHome />
          Dashboard
        </Link>

        <Link
          to="/student/courses"
          className="hover:bg-white/10 p-4 rounded-2xl transition flex items-center gap-4"
        >
          <FaBook />
          Courses
        </Link>

        <Link
          to="/student/lessons"
          className="hover:bg-white/10 p-4 rounded-2xl transition flex items-center gap-4"
        >
          <FaLanguage />
          Lessons
        </Link>

        <Link
          to="/student/vocabulary"
          className="hover:bg-white/10 p-4 rounded-2xl transition flex items-center gap-4"
        >
          <FaLanguage />
          Vocabulary
        </Link>

        <Link
          to="/student/flashcards"
          className="hover:bg-white/10 p-4 rounded-2xl transition flex items-center gap-4"
        >
          <FaClone />
          Flashcards
        </Link>

        <Link
          to="/student/quiz"
          className="hover:bg-white/10 p-4 rounded-2xl transition flex items-center gap-4"
        >
          <FaQuestionCircle />
          Quiz
        </Link>

        <Link
          to="/student/games"
          className="hover:bg-white/10 p-4 rounded-2xl transition flex items-center gap-4"
        >
          <FaGamepad />
          Games
        </Link>

        <Link
          to="/student/progress"
          className="hover:bg-white/10 p-4 rounded-2xl transition flex items-center gap-4"
        >
          <FaChartLine />
          Progress
        </Link>

      </div>

    </motion.div>
  );
};

export default StudentSidebar;