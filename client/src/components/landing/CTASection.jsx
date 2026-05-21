import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="px-10 py-32">

      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[40px] p-20 text-center">

        <h1 className="text-6xl font-bold">

          Start Your Japanese
          Journey Today

        </h1>

        <p className="text-2xl mt-8 text-white/80">

          Join thousands of learners
          mastering Japanese with
          NihongoHub.

        </p>

        <Link
          to="/register"
          className="inline-block bg-white text-black px-10 py-5 rounded-2xl text-xl font-bold mt-10"
        >
          Get Started
        </Link>

      </div>

    </section>
  );
};

export default CTASection;