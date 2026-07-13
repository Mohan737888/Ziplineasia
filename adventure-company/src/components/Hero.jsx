import { motion } from "framer-motion";
import hero from "../assets/hero.png";

function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white pt-40">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6 lg:px-8">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold">
            ENGINEERING • DESIGN • INSTALLATION
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mt-8">
            Building world's Best
            <span className="block text-orange-500">
              Adventure Parks
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mt-6 leading-8 max-w-xl">
            We design and build Zip Lines, Rope Courses, Climbing Walls,
            Adventure Towers and complete Adventure Parks with world-class
            safety standards.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <button className="bg-orange-500 hover:bg-orange-600 transition duration-300 px-8 py-4 rounded-xl font-semibold">
              Get Free Quote
            </button>

            <button className="border border-white hover:bg-white hover:text-black transition duration-300 px-8 py-4 rounded-xl font-semibold">
              View Projects
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={hero}
            alt="Adventure Park"
            className="w-full max-w-xl rounded-3xl shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;