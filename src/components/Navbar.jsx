
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="w-full h-[75px] px-5 md:px-10 lg:px-[5%] bg-white border-b border-gray-100 sticky top-0 z-50 flex items-center justify-between">

      {/* Logo */}
      <a
        href="#home"
        onClick={closeMenu}
        className="text-lg md:text-xl font-semibold tracking-wide text-black whitespace-nowrap"
      >
        SHAVEZ ALI<span className="text-violet-600">.</span>
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-5 lg:gap-8">
        <a href="#about" className="nav-link">About</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#experience" className="nav-link">Experience</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>

      {/* Download Resume */}
      <a
        href="/resume.pdf"
        download
        className="hidden md:inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-5 py-3 text-sm font-medium transition duration-300"
      >
        Download <span>↗</span>
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl text-gray-900 p-2"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-[75px] left-0 w-full bg-white border-b border-gray-100 shadow-md flex flex-col items-center gap-1 py-4 md:hidden transition-all duration-300 ${
          menuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-3 pointer-events-none"
        }`}
      >
        <a href="#about" onClick={closeMenu} className="mobile-link">About</a>
        <a href="#skills" onClick={closeMenu} className="mobile-link">Skills</a>
        <a href="#experience" onClick={closeMenu} className="mobile-link">Experience</a>
        <a href="#projects" onClick={closeMenu} className="mobile-link">Projects</a>
        <a href="#contact" onClick={closeMenu} className="mobile-link">Contact</a>

        <a
          href="/resume.pdf"
          download
          onClick={closeMenu}
          className="mt-3 bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 text-sm font-medium"
        >
          Download Resume ↗
        </a>
      </div>

    </nav>
  );
};

export default Navbar;
