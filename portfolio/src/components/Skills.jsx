import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import { SiExpress, SiMongodb } from "react-icons/si";

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-10 text-center"
    >

      <h2 className="text-4xl font-bold text-cyan-400 mb-10">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">

        <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition">

          <FaHtml5 className="text-6xl text-orange-500 mx-auto mb-4" />

          <h3 className="text-xl font-semibold">
            HTML
          </h3>

        </div>

        <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition">

          <FaCss3Alt className="text-6xl text-blue-500 mx-auto mb-4" />

          <h3 className="text-xl font-semibold">
            CSS
          </h3>

        </div>

        <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition">

          <FaJs className="text-6xl text-yellow-400 mx-auto mb-4" />

          <h3 className="text-xl font-semibold">
            JavaScript
          </h3>

        </div>

        <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition">

          <FaReact className="text-6xl text-cyan-400 mx-auto mb-4" />

          <h3 className="text-xl font-semibold">
            React
          </h3>

        </div>

        <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition">

          <FaNodeJs className="text-6xl text-green-500 mx-auto mb-4" />

          <h3 className="text-xl font-semibold">
            Node.js
          </h3>

        </div>

        <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition">

          <SiExpress className="text-6xl text-white mx-auto mb-4" />

          <h3 className="text-xl font-semibold">
            Express.js
          </h3>

        </div>

        <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition">

          <SiMongodb className="text-6xl text-green-400 mx-auto mb-4" />

          <h3 className="text-xl font-semibold">
            MongoDB
          </h3>

        </div>

        <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition">

          <FaGithub className="text-6xl text-gray-300 mx-auto mb-4" />

          <h3 className="text-xl font-semibold">
            GitHub
          </h3>

        </div>

      </div>

    </section>
  );
}

export default Skills;