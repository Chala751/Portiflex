import { motion } from "framer-motion";
import { Code2, Server, Palette, Rocket } from "lucide-react";

const skills = [
  "React.js", "Next.js", "Node.js", "Express.js",
  "MongoDB", "Tailwind CSS", "TypeScript",
  "Framer Motion", "REST APIs", "MySQL",
];

const About = () => {
  return (
    <section className="flex flex-col items-center text-center px-6 py-24 bg-gradient-to-b from-white via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* ===== Heading ===== */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6"
      >
        About <span className="text-blue-600 dark:text-blue-400">Me</span>
      </motion.h2>

      {/* ===== Intro Paragraph ===== */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-gray-700 dark:text-gray-300 max-w-3xl text-lg leading-relaxed mb-12"
      >
        Hi 👋 I’m <span className="font-semibold text-blue-600 dark:text-blue-400">Chala Temesgen</span>,
        a passionate <strong>Full Stack Developer</strong> specialized in building 
        powerful and scalable web applications using the{" "}
        <span className="font-semibold">MERN Stack</span> and{" "}
        <span className="font-semibold">Next.js</span>.
        <br />I’m currently studying Software Engineering at{" "}
        <strong>Adama Science and Technology University (ASTU)</strong>.
        <br />I love transforming complex ideas into beautiful, interactive, and
        high-performing web experiences.
      </motion.p>

      {/* ===== What I Do Section ===== */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mb-16">
        {[
          {
            icon: <Code2 className="w-10 h-10 text-blue-600" />,
            title: "Frontend Development",
            desc: "Crafting responsive, interactive, and accessible interfaces using React.js, Next.js, and Tailwind CSS.",
          },
          {
            icon: <Server className="w-10 h-10 text-blue-600" />,
            title: "Backend Engineering",
            desc: "Building robust REST APIs with Node.js, Express, and MongoDB — ensuring scalability and performance.",
          },
          {
            icon: <Palette className="w-10 h-10 text-blue-600" />,
            title: "UI/UX & Animation",
            desc: "Designing clean, modern user interfaces with smooth animations powered by Framer Motion.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
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

      {/* ===== Skills Section ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center justify-center gap-2">
          <Rocket className="w-6 h-6 text-blue-600" /> Tech Stack
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full font-medium shadow-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* ===== Background Decoration ===== */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 0.15, y: 0 }}
        transition={{ delay: 0.4, duration: 1.5 }}
        className="absolute bottom-0 left-0 right-0 flex justify-center"
      >
        <div className="w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-30 dark:opacity-20" />
      </motion.div>
    </section>
  );
};

export default About;
