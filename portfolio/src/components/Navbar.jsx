import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle =
    "relative text-gray-700 hover:text-gray-900 transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-purple-500 after:transition-all hover:after:w-full";

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-200"
    >

      <div className="flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-wide text-gray-900">
          Dharan Abishek
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">

          <li><a href="#home" className={linkStyle}>Home</a></li>
          <li><a href="#about" className={linkStyle}>About</a></li>
          <li><a href="#skills" className={linkStyle}>Skills</a></li>
          <li><a href="#projects" className={linkStyle}>Projects</a></li>
          <li><a href="#contact" className={linkStyle}>Contact</a></li>

        </ul>

        {/* Mobile Button */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-2xl cursor-pointer text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </motion.div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col items-center gap-6 py-8 bg-white border-t border-gray-200"
          >

            {["home", "about", "skills", "projects", "contact"].map(
              (item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={`#${item}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-700 hover:text-purple-500 transition"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </motion.li>
              )
            )}

          </motion.ul>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}

export default Navbar;