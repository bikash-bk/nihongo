import { motion } from "framer-motion";

const GradientCard = ({
  children,
  className = "",
}) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`rounded-3xl p-8 shadow-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GradientCard;