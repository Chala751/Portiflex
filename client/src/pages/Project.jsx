import { motion } from "framer-motion";

const projects = [
  {
    title: "Campus Bites",
    description: "A campus food ordering system connecting students with nearby hotels for faster delivery.",
    tech: ["React Native", "Appwrite", "Tailwind"],
  },
  {
    title: "Employee Management System",
    description: "A Next.js + MySQL app for managing employee records, attendance, and roles.",
    tech: ["Next.js", "MySQL", "NextAuth", "Tailwind"],
  },
  {
    title: "VoteApp",
    description: "A simple web app allowing users to vote once between Ronaldo and Messi.",
    tech: ["Next.js", "MongoDB", "TypeScript"],
  },
];

const Projects = () => {
  return (
    <section className="px-6 py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-900 dark:text-white mb-10"
      >
        My <span className="text-blue-600 dark:text-blue-400">Projects</span>
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="flex justify-center gap-2 flex-wrap">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
