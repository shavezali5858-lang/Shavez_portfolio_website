
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      number: "01",
      description: "Building responsive and interactive user interfaces.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Tailwind CSS"
      ]
    },
    {
      title: "Backend Development",
      number: "02",
      description: "Developing server-side applications and REST APIs.",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Socket.IO",
        "JWT Authentication"
      ]
    },
    {
      title: "Databases",
      number: "03",
      description: "Managing and working with application data.",
      skills: [
        "MongoDB",
        "SQL",
        "Mongoose"
      ]
    },
    {
      title: "Programming & Tools",
      number: "04",
      description: "Problem solving and development tools.",
      skills: [
        "C++",
        "Git",
        "GitHub",
        "Postman",
        "VS Code"
      ]
    },
    {
  title: "Core CS Fundamentals",
  number: "05",
  description: "Understanding core computer science concepts and system architecture.",
  skills: [
    "Data Structures & Algorithms",
    "OOP",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
    "System Design"
  ]
}
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-12 lg:px-[10%] bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-violet-600 text-sm font-semibold tracking-[3px] uppercase mb-4">
            My Expertise
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight">
            Technical <span className="text-violet-600">Skills.</span>
          </h2>

          <p className="text-gray-500 mt-5 max-w-xl leading-7">
            Technologies and tools I use to build modern,
            scalable and user-friendly web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {skillCategories.map((category) => (
            <div
              key={category.number}
              className="group border border-gray-200 p-7 md:p-9 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100/50 transition-all duration-300"
            >

              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">

                <span className="text-violet-600 text-sm font-semibold">
                  {category.number}
                </span>

                <span className="text-gray-300 text-2xl group-hover:text-violet-500 transition">
                  ↗
                </span>

              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                {category.title}
              </h3>

              <p className="text-gray-500 text-sm leading-6 mb-7">
                {category.description}
              </p>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-700 text-sm hover:bg-violet-50 hover:text-violet-700 hover:border-violet-200 transition duration-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;
