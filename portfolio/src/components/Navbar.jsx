import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b border-gray-800 bg-black sticky top-0 z-50">

      <h1 className="text-2xl font-bold text-cyan-400">
        Dharan
      </h1>

      {/* Desktop Menu */}

      <ul className="hidden md:flex gap-8 text-gray-300">

        <li>
          <a href="#home" className="hover:text-cyan-400">
            Home
          </a>
        </li>

        <li>
          <a href="#about" className="hover:text-cyan-400">
            About
          </a>
        </li>

        <li>
          <a href="#skills" className="hover:text-cyan-400">
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" className="hover:text-cyan-400">
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>
        </li>

      </ul>

      {/* Mobile Icon */}

      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >

        {menuOpen ? <FaTimes /> : <FaBars />}

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <ul className="absolute top-20 left-0 w-full bg-black flex flex-col items-center gap-6 py-8 text-gray-300 md:hidden">

          <li>
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-400"
            >
              Contact
            </a>
          </li>

        </ul>
      )}

    </nav>
  );
}

export default Navbar;