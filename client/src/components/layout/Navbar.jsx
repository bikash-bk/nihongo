import { useSelector } from "react-redux";

import { motion } from "framer-motion";

const Navbar = () => {

  const { user } = useSelector(
    (state) => state.auth
  );

  return (
    <motion.div
      initial={{
        y: -30,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      className="h-[90px] bg-white/10 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-10"
    >

      <div>

        <h1 className="text-2xl font-bold text-white">
          NihongoHub
        </h1>

      </div>


      <div className="flex items-center gap-5">

        <div className="text-right">

          <h2 className="text-white font-semibold">

            {user?.username}

          </h2>

          <p className="text-sm text-gray-300">

            {user?.role}

          </p>

        </div>

        <img
          src="https://i.pravatar.cc/150"
          alt="avatar"
          className="w-14 h-14 rounded-full border-2 border-indigo-400"
        />

      </div>

    </motion.div>
  );
};

export default Navbar;