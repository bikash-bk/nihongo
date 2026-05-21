import { motion } from "framer-motion";

const SectionTitle = ({
  title,
  subtitle,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="text-center mb-16"
    >

      <h1 className="text-5xl font-bold">

        {title}

      </h1>

      <p className="text-gray-300 mt-5 text-xl max-w-[700px] mx-auto">

        {subtitle}

      </p>

    </motion.div>
  );
};

export default SectionTitle;