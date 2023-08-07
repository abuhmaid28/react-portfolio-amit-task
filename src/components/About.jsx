const About = () => {
  return (
    // About section with a full-screen background color
    <div name="about" className="w-full bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full pb-80 sm:pb-0 sm:mb-[-100px] lg:mb-0 lg:pb-20">
        {/* Grid layout for the "About" section */}
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          {/* Left side of the grid */}
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          {/* Right side of the grid */}
          <div></div>
        </div>
        {/* Another grid layout for the main content */}
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          {/* Left side of the grid */}
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Ahmed Shaaban, nice to meet you. Please take a look
              around.
            </p>
          </div>
          {/* Right side of the grid */}
          <div>
            <p>
              I'm a passionate front-end developer with expertise in HTML, CSS,
              JavaScript, Git/GitHub, Bootstrap, Tailwind CSS, SCSS (Sass), and
              jQuery. I have experience in creating visually appealing web
              experiences with meticulous attention to detail. Currently, I am
              expanding my skills in React, Next.js, and Material UI to stay at
              the cutting edge of web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
