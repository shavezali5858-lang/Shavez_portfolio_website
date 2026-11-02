
const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 lg:px-[10%] bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-16">
          <p className="text-violet-600 text-sm font-semibold tracking-[3px] uppercase mb-4">
            Get to know me
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight">
            About <span className="text-violet-600">Me.</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Side */}
          <div>
            <h3 className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed">
              Passionate about building
              <span className="text-violet-600"> meaningful digital experiences.</span>
            </h3>

            <p className="text-gray-500 leading-8 mt-6 text-base md:text-lg">
              I'm a Computer Science undergraduate at Jamia Hamdard,
              passionate about software development and building
              practical web applications.
            </p>

            <p className="text-gray-500 leading-8 mt-4 text-base md:text-lg">
              I enjoy working across the frontend and backend,
              using React, Node.js and MongoDB to turn ideas
              into functional applications.
            </p>

            <p className="text-gray-500 leading-8 mt-4 text-base md:text-lg">
              Beyond development, I regularly practice DSA and
              explore system design to strengthen my
              problem-solving and engineering skills.
            </p>
          </div>

          {/* Right Side */}
          <div className="space-y-8">

            {/* Personal Information */}
            <div className="border-b border-gray-200 pb-6">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                Education
              </p>
              <h3 className="text-xl font-semibold text-gray-900">
                B.Tech in Computer Science
              </h3>
              <p className="text-gray-500 mt-1">
                Jamia Hamdard
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                Focus Area
              </p>
              <h3 className="text-xl font-semibold text-gray-900">
                Full Stack Development
              </h3>
              <p className="text-gray-500 mt-1">
                React.js · Node.js · Express.js · MongoDB
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                Currently Improving
              </p>
              <h3 className="text-xl font-semibold text-gray-900">
                Problem Solving & System Design
              </h3>
              <p className="text-gray-500 mt-1">
                DSA · SQL · Backend Architecture
              </p>
            </div>

            {/* Resume Link */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 text-violet-600 font-semibold hover:gap-5 transition-all duration-300"
            >
              Download My Resume
              <span>↗</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
