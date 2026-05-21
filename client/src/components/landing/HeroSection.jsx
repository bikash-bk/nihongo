import { motion } from "framer-motion";

import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-10 relative overflow-hidden">

      {/* BACKGROUND BLUR */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-[120px] opacity-30 top-[-100px] left-[-100px]"></div>

      <div className="absolute w-[500px] h-[500px] bg-pink-500 rounded-full blur-[120px] opacity-20 bottom-[-100px] right-[-100px]"></div>


      <div className="grid grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >

          <span className="bg-indigo-500/20 text-indigo-300 px-5 py-2 rounded-full text-sm">

            🇯🇵 Learn Japanese Smarter

          </span>

          <h1 className="text-7xl font-bold leading-tight mt-8">

            Master Japanese
            <br />
            Through Fun
            <br />
            Interactive Learning

          </h1>

          <p className="text-gray-300 text-xl mt-8 leading-9">

            Learn Hiragana,
            Katakana,
            Vocabulary,
            Quizzes,
            Games,
            Flashcards,
            and JLPT preparation
            in one modern platform.

          </p>

          <div className="flex gap-5 mt-10">

            <Link
              to="/register"
              className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold"
            >
              Start Learning
            </Link>

            <Link
              to="/login"
              className="border border-white/20 px-8 py-4 rounded-2xl text-lg"
            >
              Login
            </Link>

          </div>

        </motion.div>


        {/* RIGHT */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative"
        >

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1528360983277-13d401cdc186"
              alt="Japan"
              className="rounded-3xl h-[500px] w-full object-cover"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default HeroSection;