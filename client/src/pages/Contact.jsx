import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="px-6 py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-900 dark:text-white mb-10"
      >
        Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-center gap-10 max-w-4xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-gray-700 dark:text-gray-300"
        >
          <p className="flex items-center justify-center gap-2">
            <Mail className="text-blue-600" /> ctemesgen85@gmail.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <Phone className="text-blue-600" /> +251 9XX XXX XXX
          </p>
          <p className="flex items-center justify-center gap-2">
            <MapPin className="text-blue-600" /> Adama, Ethiopia
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 w-full md:w-1/2"
        >
          <input type="text" placeholder="Your Name" className="p-3 rounded-lg border dark:bg-gray-800" />
          <input type="email" placeholder="Your Email" className="p-3 rounded-lg border dark:bg-gray-800" />
          <textarea placeholder="Your Message" className="p-3 rounded-lg border h-32 dark:bg-gray-800" />
          <button className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
