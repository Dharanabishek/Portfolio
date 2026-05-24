import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const skills = [
  { icon: FaHtml5, name: "HTML", color: "text-orange-500" },
  { icon: FaCss3Alt, name: "CSS", color: "text-blue-500" },
  { icon: FaJs, name: "JavaScript", color: "text-yellow-500" },
  { icon: FaReact, name: "React", color: "text-cyan-500" },
  { icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
  { icon: SiExpress, name: "Express.js", color: "text-gray-700" },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
  { icon: FaGithub, name: "GitHub", color: "text-gray-800" },
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 text-center bg-white">

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">

        {skills.map((skill, i) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center justify-center p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
            >

              <Icon className={`text-4xl mb-3 ${skill.color}`} />

              <h3 className="text-sm font-medium text-gray-700">
                {skill.name}
              </h3>

            </motion.div>
          );
        })}

      </div>
    </section>
  );
}

export default Skills;