import React from 'react'


const Certificates = () => {
  const certificates = [
      {
    id: 1,
    title: "C++ Programming Course",
    organization: "Delhi Coding Academy",
    type: "Programming Course",
    date: "2024",
    link: "",
  },
  {
    id: 2,
    title: "Introduction to Prompt Engineering",
    organization: "Microsoft & GitHub Copilot",
    type: "Technical Learning Program",
    date: "2026",
    link: "",
  },
    {
      id: 3,
      title: "Technology Job Simulation",
      organization: "Deloitte",
      type: "Virtual Experience Program",
      date: "2025",
      link: "", // Add your certificate URL
    },
    {
      id: 4,
      title: "Software Engineering Job Simulation",
      organization: "JPMorgan Chase & Co.",
      type: "Virtual Experience Program",
      date: "2025",
      link: "", // Add your certificate URL
    },

   
  ];

  return (
    <section
      id="certificates"
      className="bg-gray-50 py-24 px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <p className="text-violet-600 font-semibold uppercase tracking-[3px] text-sm mb-3">
            Achievements
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Certifications<span className="text-violet-600">.</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl leading-relaxed">
            Professional learning experiences and programs that have helped
            me strengthen my technical and problem-solving skills.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white border border-gray-200 rounded-2xl p-7 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4">

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 bg-violet-50 px-3 py-1.5 rounded-full">
                    Forage
                  </span>

                  <h3 className="text-xl font-bold text-gray-900 mt-5">
                    {certificate.title}
                  </h3>

                  <p className="text-gray-700 font-medium mt-2">
                    {certificate.organization}
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    {certificate.type}
                  </p>

                  <p className="text-sm text-gray-400 mt-3">
                    {certificate.date}
                  </p>
                </div>

                <div className="w-12 h-12 shrink-0 rounded-xl bg-violet-50 flex items-center justify-center text-violet-600 text-xl font-bold">
                  ✓
                </div>

              </div>

              {certificate.link && (
                <div className="mt-7 pt-5 border-t border-gray-100">
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-violet-700 hover:text-violet-900 transition-colors"
                  >
                    View Certificate ↗
                  </a>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Certificates;

