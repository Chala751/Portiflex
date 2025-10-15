import {motion} from "framer-motion"
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,transparent_70%)] pointer-events-none" />

      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight"
      >
        Welcome to <span className="text-blue-600 dark:text-blue-400">Portiflex</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-gray-700 dark:text-gray-300 max-w-2xl mb-10 text-lg"
      >
        Create, update, and showcase your professional portfolio effortlessly.
        <br /> Designed for developers, creators, and professionals who evolve.
      </motion.p>

      {/* Call to Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-300"
      >
        Get Started <ArrowRight size={20} />
      </motion.button>

      {/* Floating Shapes / Decoration */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="absolute -bottom-12 left-0 right-0 flex justify-center"
      >
        <div className="w-80 h-80 bg-blue-300 rounded-full blur-3xl opacity-30 dark:opacity-20" />
      </motion.div>
    </section>
  );
};

export default Home;
