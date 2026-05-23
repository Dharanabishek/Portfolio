import youtubeImage from "../assets/projects/youtube.png";
import liquorImage from "../assets/projects/liquor.png";

function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-10"
    >

      <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* Project 1 */}

        <div className="bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg hover:shadow-cyan-500/20">

          <img
            src={liquorImage}
            alt="Liquor Manage App"
            className="w-full h-60 object-cover"
          />

          <div className="p-6">

            <h3 className="text-2xl font-bold mb-4">
              Liquor Manage App
            </h3>

            <p className="text-gray-400 mb-6">

              Backend management system using
              Node.js, Express.js and MongoDB.

            </p>

            <div className="flex gap-4">

              <a
                href="#"
                className="bg-cyan-400 text-black px-4 py-2 rounded-lg font-semibold"
              >
                Live Demo
              </a>

              <a
                href="#"
                className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

        {/* Project 2 */}

        <div className="bg-gray-900 rounded-2xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg hover:shadow-cyan-500/20">

          <img
            src={youtubeImage}
            alt="YouTube Clone"
            className="w-full h-60 object-cover"
          />

          <div className="p-6">

            <h3 className="text-2xl font-bold mb-4">
              YouTube Clone
            </h3>

            <p className="text-gray-400 mb-6">

              Full stack video platform clone with
              authentication and uploads.

            </p>

            <div className="flex gap-4">

              <a
                href="#"
                className="bg-cyan-400 text-black px-4 py-2 rounded-lg font-semibold"
              >
                Live Demo
              </a>

              <a
                href="#"
                className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;