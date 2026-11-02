
const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Frontend Developer Intern",
      company: "Uptoskills",
      type: "Internship",
      period: "May 2026-August 2026",
      description:
        "Worked on frontend development tasks and improved existing application functionality by integrating backend APIs and enhancing user interfaces.",
      achievements: [
        "Integrated backend APIs into existing React components.",
        "Implemented CSV export functionality for company data.",
        "Improved UI components and removed unnecessary mock data.",
        "Collaborated on frontend improvements and backend integration."
      ]
    }
    
  ];

  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 lg:px-[10%] bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-violet-600 text-sm font-semibold tracking-[3px] uppercase mb-4">
            My Journey
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight">
            Experience <span className="text-violet-600">& Learning.</span>
          </h2>

          <p className="text-gray-500 mt-5 max-w-xl leading-7">
            My professional experience and practical learning
            through internships and industry simulations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-violet-200 ml-3 md:ml-5 space-y-12">

          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="relative pl-8 md:pl-12"
            >

              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-violet-600 border-4 border-gray-50"></div>

              {/* Experience Card */}
              <div className="bg-white border border-gray-200 p-6 md:p-8 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100/40 transition-all duration-300">

                {/* Date and Type */}
                <div className="flex flex-wrap items-center gap-3 mb-5">

                  <span className="text-sm text-violet-600 font-semibold">
                    {experience.period}
                  </span>

                  <span className="text-xs bg-violet-50 text-violet-700 px-3 py-1">
                    {experience.type}
                  </span>

                </div>

                {/* Role */}
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {experience.role}
                </h3>

                <h4 className="text-lg font-medium text-gray-600 mt-2">
                  {experience.company}
                </h4>

                {/* Description */}
                <p className="text-gray-500 leading-7 mt-5">
                  {experience.description}
                </p>

                {/* Achievements */}
                <ul className="mt-6 space-y-3">

                  {experience.achievements.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-600 text-sm md:text-base"
                    >
                      <span className="text-violet-600 mt-1">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}

                </ul>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;
