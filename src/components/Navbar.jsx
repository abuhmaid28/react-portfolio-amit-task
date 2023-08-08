import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  // State to handle mobile menu visibility
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      {/* Brand logo */}
      <div>
        <a className="text-2xl sm:text-4xl font-normal" href="#">
          Ahmed Shaaban
        </a>
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={750}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={750}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={750}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={750}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={750}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={750}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={750}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={750}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={750}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={750}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-40 h-16 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="https://www.linkedin.com/in/abuhmaid28/"
              rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-40 h-16 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="https://github.com/abuhmaid28"
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-40 h-16 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="mailto:abuhmaid2810@gmail.com"
              rel="noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-40 h-16 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              href="https://drive.google.com/file/d/19qZm8Vcue8xXJ3Om1vYdXwfshSm8RI07/view?usp=sharing"
              rel="noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
