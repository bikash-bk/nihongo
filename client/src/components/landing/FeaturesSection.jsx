import {
  FaBook,
  FaGamepad,
  FaLanguage,
  FaQuestionCircle,
} from "react-icons/fa";

import GradientCard from "../ui/GradientCard";

import SectionTitle from "../ui/SectionTitle";

const features = [
  {
    title: "Interactive Lessons",
    description:
      "Professional Japanese lessons with videos and notes.",
    icon: <FaBook size={40} />,
  },

  {
    title: "Vocabulary Learning",
    description:
      "Master Japanese vocabulary with audio pronunciation.",
    icon: <FaLanguage size={40} />,
  },

  {
    title: "Japanese Games",
    description:
      "Learn Japanese through engaging mini games.",
    icon: <FaGamepad size={40} />,
  },

  {
    title: "Quiz System",
    description:
      "Practice with JLPT-style quizzes and tests.",
    icon: (
      <FaQuestionCircle size={40} />
    ),
  },
];

const FeaturesSection = () => {
  return (
    <section className="px-10 py-32">

      <SectionTitle
        title="Everything You Need"
        subtitle="A complete Japanese learning ecosystem designed for modern learners."
      />

      <div className="grid grid-cols-4 gap-8">

        {features.map(
          (feature, index) => (
            <GradientCard key={index}>

              <div className="mb-8">

                {feature.icon}

              </div>

              <h2 className="text-3xl font-bold">

                {feature.title}

              </h2>

              <p className="mt-5 text-lg text-white/80 leading-8">

                {feature.description}

              </p>

            </GradientCard>
          )
        )}

      </div>

    </section>
  );
};

export default FeaturesSection;