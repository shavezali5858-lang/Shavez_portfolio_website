
import projects from "../data/projects";
import Projectcard from "../../components/Projectcard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-white py-24 px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-14">
          <p className="text-violet-600 font-semibold uppercase tracking-[3px] text-sm mb-3">
            My Work
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Featured Projects<span className="text-violet-600">.</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl leading-relaxed">
            A selection of projects where I have applied my skills to build
            practical, user-focused applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Projectcard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
