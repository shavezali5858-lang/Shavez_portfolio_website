
const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-75px)] flex items-center px-6 md:px-12 lg:px-[10%] py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="order-2 md:order-1">

          <p className="text-violet-600 font-medium tracking-[3px] uppercase text-sm mb-5">
            Hello, I'm
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-gray-900 tracking-tight leading-tight">
            Shavez
            <br />
            Ali<span className="text-violet-600">.</span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-medium mt-5">
            Full Stack Developer
          </h2>

          <p className="text-gray-500 text-base md:text-lg leading-relaxed mt-6 max-w-lg">
            I'm a Computer Science student passionate about
            building modern web applications. I enjoy working
            with React, Node.js and backend technologies to
            turn ideas into practical solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-9">

            <a
              href="#projects"
              className="bg-violet-600 text-white px-7 py-3.5 font-medium hover:bg-violet-700 transition duration-300 flex items-center gap-2"
            >
              View My Work
              <span>↗</span>
            </a>

            <a
              href="#contact"
              className="border border-gray-300 text-gray-800 px-7 py-3.5 font-medium hover:border-violet-600 hover:text-violet-600 transition duration-300"
            >
              Contact Me
            </a>

          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-10">

            <a
              href="https://github.com/shavezali5858-lang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-violet-600 transition"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/shavez-ali-127b23295/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-violet-600 transition"
            >
              LinkedIn ↗
            </a>

          </div>

        </div>

        {/* Right Visual */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">

          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">

            {/* Decorative Background */}
            <div className="absolute inset-0 bg-violet-100 rounded-full"></div>

            {/* Placeholder */}
          <div className="absolute inset-4 rounded-full border border-violet-200 bg-violet-50 overflow-hidden flex items-center justify-center">

  <img
    src="https://img.magnific.com/free-vector/man-using-laptop-cartoon_1308-120757.jpg?semt=ais_hybrid&w=740&q=80"
    alt="Developer illustration"
    className="w-full h-full object-contain p-4"
  />

</div>
            {/* Decorative Badge */}
            <div className="absolute bottom-8 -left-5 bg-white shadow-lg px-5 py-3 border border-gray-100">
              <p className="text-sm font-medium text-gray-800">
                Building for the web
              </p>
              <p className="text-xs text-gray-400 mt-1">
                React · Node.js · MongoDB
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Home;
