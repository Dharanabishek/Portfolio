import { motion } from "framer-motion";
import youtubeImage from "../assets/projects/youtube.png";
import liquorImage from "../assets/projects/liquor.png";

const projects = [
  {
    title: "Liquor Manage App",
    desc: "Backend management system using Node.js, Express.js and MongoDB.",
    image: liquorImage,
  },
  {
    title: "YouTube Clone",
    desc: "Full stack video platform clone with authentication and uploads.",
    image: youtubeImage,
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center tracking-tight">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl transition"
          >

            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-6">

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex gap-4">

                <a
                  href="#"
                  className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
                >
                  Live Demo
                </a>

                <a
                  href="#"
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-800 text-sm font-medium hover:bg-gray-100 transition"
                >
                  GitHub
                </a>

              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Projects;