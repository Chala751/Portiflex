// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight, Laptop, Code, Globe, Send } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      {/* ===== Hero Section ===== */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,transparent_70%)] pointer-events-none" />

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight"
        >
          Hi, I’m{" "}
          <span className="text-blue-600 dark:text-blue-400">Chala Temesgen</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-700 dark:text-gray-300 max-w-2xl mb-10 text-lg"
        >
          A passionate <strong>Full Stack Developer</strong> and Software Engineering student at{" "}
          <strong>ASTU</strong>. I build scalable web apps using{" "}
          <span className="text-blue-600 dark:text-blue-400">MERN Stack, Next.js,</span> and{" "}
          <span className="text-blue-600 dark:text-blue-400">React</span>.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="/projects"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-300"
          >
            View My Work <ArrowRight size={20} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="absolute -bottom-12 left-0 right-0 flex justify-center"
        >
          <div className="w-80 h-80 bg-blue-300 rounded-full blur-3xl opacity-30 dark:opacity-20" />
        </motion.div>
      </section>

      {/* ===== What I Do Section ===== */}
      <section className="py-24 px-6 text-center bg-gradient-to-b from-white via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
        >
          What I <span className="text-blue-600 dark:text-blue-400">Do</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-lg mb-12"
        >
          I design and develop efficient, responsive web applications with clean UI/UX.
          From backend APIs to frontend animations — I love bringing ideas to life.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <Code className="w-10 h-10 text-blue-600" />,
              title: "Full Stack Development",
              desc: "Building complete web apps using MongoDB, Express, React, and Node.js.",
            },
            {
              icon: <Laptop className="w-10 h-10 text-blue-600" />,
              title: "Next.js & React",
              desc: "Modern frontends with reusable components, animations, and dark mode.",
            },
            {
              icon: <Globe className="w-10 h-10 text-blue-600" />,
              title: "Responsive UI/UX",
              desc: "Creating user-centered designs that work seamlessly across all devices.",
            },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Contact Section (Unified Style) ===== */}
      <section className="relative py-24 px-6 text-center overflow-hidden bg-gradient-to-b from-white via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,transparent_70%)] pointer-events-none" />

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          Let’s <span className="text-blue-600 dark:text-blue-400">Build Something Great</span> Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300"
        >
          I’m always open to collaboration, internships, or new development opportunities.
          Let’s turn your idea into a real-world application.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300"
          >
            <Send size={20} /> Contact Me
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.15, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="absolute -bottom-12 left-0 right-0 flex justify-center"
        >
          <div className="w-80 h-80 bg-blue-300 rounded-full blur-3xl opacity-30 dark:opacity-20" />
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
