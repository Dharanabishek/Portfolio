import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-5"
    >

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold mb-5"
      >

        Hello, I'm
        <span className="text-cyan-400"> Dharan</span>

      </motion.h1>

      <TypeAnimation
        sequence={[
          "MCA Student",
          2000,
          "Full Stack Developer",
          2000,
          "Backend Developer",
          2000,
          "AI Enthusiast",
          2000,
        ]}
        wrapper="h2"
        speed={50}
        repeat={Infinity}
        className="text-2xl md:text-4xl text-gray-300 mb-6 font-semibold"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="max-w-2xl text-gray-400 mb-8 text-lg"
      >

        Passionate about building modern web
        applications, backend systems and AI projects.

      </motion.p>

     <div className="flex gap-5">

  <motion.a
    href="#projects"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1.5, duration: 0.5 }}
    className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
  >

    View Projects

  </motion.a>

  <motion.a
    href="/resume.pdf"
    download
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1.7, duration: 0.5 }}
    className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition"
  >

    Download Resume

  </motion.a>

</div>

    </section>
  );
}

export default Hero;