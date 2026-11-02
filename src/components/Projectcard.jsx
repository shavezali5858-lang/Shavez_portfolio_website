
const Projectcard = ({ project }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50 transition-all duration-300">

      {/* Project Image */}
      <div className="relative h-52 bg-gray-100 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-violet-50 to-purple-100">
            <span className="text-5xl font-bold text-violet-300">
              {project.title.charAt(0)}
            </span>
          </div>
        )}

        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-violet-700 text-xs font-semibold px-3 py-1.5 rounded-full">
          {project.category}
        </span>
      </div>

      {/* Project Details */}
      <div className="p-6">

        <h3 className="text-xl font-bold text-gray-900 group-hover:text-violet-700 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-500 text-sm leading-6 mt-3 min-h-[72px]">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-5">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs font-medium text-violet-700 bg-violet-50 px-3 py-1.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex items-center gap-5 mt-7 pt-5 border-t border-gray-100">

          {project.github && (
            <a
              href="https://github.com/shavezali5858-lang/AI_ResumeAnalyzer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-700 hover:text-violet-700 transition-colors"
            >
              GitHub ↗
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-violet-700 hover:text-violet-900 transition-colors"
            >
              Live Demo ↗
            </a>
          )}

        </div>
      </div>
    </div>
  );
};

export default Projectcard;
