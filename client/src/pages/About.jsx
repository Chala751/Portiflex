import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="flex flex-col items-center text-center px-6 py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
      >
        About <span className="text-blue-600 dark:text-blue-400">Me</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-gray-700 dark:text-gray-300 max-w-3xl text-lg leading-relaxed"
      >
        Hi 👋 I’m <span className="font-semibold">Chala Temesgen</span>, a passionate
        <span className="text-blue-600 dark:text-blue-400"> Full Stack Developer </span> and
        Software Engineering student at <strong>Adama Science and Technology University (ASTU)</strong>.
        <br />
        I specialize in building modern web applications using
        <span className="text-blue-600 dark:text-blue-400"> MERN Stack, Next.js, and React</span>.
        <br />
        I love designing scalable systems, creating smooth user experiences, and continuously improving my skills.
      </motion.p>
    </section>
  );
};

export default About;
