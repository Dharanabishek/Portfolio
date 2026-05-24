import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 bg-white"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Hello, I'm{" "}
            <span className="text-blue-900">Dharan</span>
          </h1>

          {/* Type Animation */}
          <div className="mt-4 mb-6">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "MERN Stack Engineer",
                2000,
                "AI-Powered Developer",
                2000,
                "Building Scalable Web Apps",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-3xl text-gray-600 font-medium"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg max-w-xl mb-8 leading-relaxed"
          >
            MCA student and aspiring full-stack developer focused on building
            modern web applications, scalable backend systems, and AI-driven solutions.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 flex-wrap"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Download Resume
            </a>
          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex-1 flex justify-center"
        >

          <motion.img
            src="/public/myimg.jpeg"
            alt="Dharan"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-xl border border-gray-900"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.03 }}
          />

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;