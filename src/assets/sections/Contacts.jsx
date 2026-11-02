
const Contacts = () => {
  return (
    <section
      id="contact"
      className="bg-gray-50 py-24 px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Section Heading */}
        <p className="text-violet-600 font-semibold uppercase tracking-[3px] text-sm mb-3">
          Get In Touch
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Let's Work Together<span className="text-violet-600">.</span>
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mt-6 leading-7">
          I'm currently looking for internship and entry-level opportunities
          where I can contribute, learn, and grow as a developer.
          If you have an opportunity or just want to connect, feel free to reach out.
        </p>

        {/* Email Button */}
        <a
          href="mailto:your-email@gmail.com"
          className="inline-flex items-center gap-2 mt-9 px-8 py-4 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-200 transition-all duration-300"
        >
          <span>✉</span>
          Say Hello
        </a>

        {/* Contact Details */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 mt-14">

          <a
            href="mailto:your-email@gmail.com"
            className="text-gray-600 hover:text-violet-600 transition-colors"
          >
            shavezali5858@gmail.com
          </a>

          <a
            href="https://github.com/shavezali5858-lang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-violet-600 transition-colors"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/shavez-ali-127b23295/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-violet-600 transition-colors"
          >
            LinkedIn ↗
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contacts;
