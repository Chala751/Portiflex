// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const GITHUB_URL = "https://github.com/Chala751";


const projects = [
  {
    title: "Campus Bites",
    description:
      "A campus food ordering system connecting students with nearby hotels for fast, reliable delivery.",
    tech: ["React Native", "Appwrite", "Tailwind"],
  },
  {
    title: "Employee Management System",
    description:
      "A full-featured Next.js application for managing employees, attendance, and role-based access control.",
    tech: ["Next.js", "MySQL", "NextAuth", "Tailwind"],
  },
  {
    title: "VoteApp",
    description:
      "A lightweight web app where users can vote once between Ronaldo and Messi with real-time results.",
    tech: ["Next.js", "MongoDB", "TypeScript"],
  },

  // ===== AI & Automation Projects =====
  {
    title: "Repair-Fix Assistant AI Agent",
    description:
      "An AI-powered repair assistant that diagnoses issues and suggests fixes using intelligent agent workflows.",
    tech: ["FastAPI", "LangGraph", "PostgreSQL", "Next.js"],
  },
  {
    title: "SQL Query AI Agent",
    description:
      "An AI agent that converts natural language into optimized SQL queries using agent-based reasoning.",
    tech: ["FastAPI", "LangGraph", "PostgreSQL"],
  },
  {
    title: "Ask-Me (RAG System)",
    description:
      "A Retrieval-Augmented Generation (RAG) application that answers questions from custom knowledge sources.",
    tech: ["MERN Stack", "RAG", "Vector Search"],
  },

  // ===== Full Stack Web Apps =====
  {
    title: "PERN Stack Application",
    description:
      "A production-ready PERN application using Prisma ORM and Neon-hosted PostgreSQL.",
    tech: ["PostgreSQL", "Neon", "Prisma", "Express", "React"],
  },
  {
    title: "Live Football Scores",
    description:
      "A real-time football score application using Server-Sent Events (SSE) for live match updates.",
    tech: ["MERN Stack", "Server-Sent Events", "API"],
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
      {/* ===== GitHub CTA ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-16"
      >
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
          Want to explore more projects, experiments, and open-source work?
        </p>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-semibold
               hover:bg-blue-700 transition shadow-md"
        >
          Visit My GitHub →
        </a>
      </motion.div>

    </section>
  );
};

export default Projects;
