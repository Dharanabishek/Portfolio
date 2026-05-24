import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center bg-white">

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 tracking-tight">
        Contact
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-8 space-y-6"
      >

        {/* Email */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium">Email</span>
          <a
            href="mailto:dharanabishek1@gmail.com"
            className="text-gray-900 hover:text-blue-500 transition"
          >
            dharanabishek1@gmail.com
          </a>
        </div>

        {/* GitHub */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium">GitHub</span>
          <a
            href="https://github.com/Dharanabishek"
            target="_blank"
            rel="noreferrer"
            className="text-gray-900 hover:text-blue-500 transition"
          >
            Visit Profile
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium">LinkedIn</span>
          <a
            href="https://www.linkedin.com/in/dharanabishek/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-900 hover:text-blue-500 transition"
          >
            Connect
          </a>
        </div>

      </motion.div>
    </section>
  );
}

export default Contact;