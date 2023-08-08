import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    // Home section with a full-screen background color
    <div name="home" className="w-full h-screen bg-[#0a192f] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        {/* Introduction */}
        <p className="text-pink-600 mt-4">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Ahmed Shaaban
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front End Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Passionate front-end developer skilled in HTML, CSS, JavaScript,
          Git/GitHub, Bootstrap, Tailwind CSS, SCSS (Sass), jQuery. Expanding
          knowledge in React, Next.js, and Material UI.
        </p>
        {/* Button to navigate to the "Work" section */}
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            {/* Link with smooth scrolling to the "Work" section */}
            <Link
              className="flex items-center"
              to="work"
              smooth={true}
              duration={750}
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
