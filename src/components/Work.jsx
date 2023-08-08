import { data } from "../data/workData.js";

const Work = () => {
  // Get the projects data from the imported file
  const projects = data;

  return (
    // Work section with a full-screen background color
    <div
      name="work"
      className="w-full text-gray-300 bg-[#0a192f] pt-96 sm:pt-10  sm:my-[-150px] lg:my-0 "
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          {/* Section title */}
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container for projects */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          {/* Render each project item */}
          {projects.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundImage: `url(${item.image})`,
                width: "100%",
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div"
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {item.name}
                </span>
                <div className="pt-4 text-center">
                  {/* Link to the GitHub repository */}
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* Link to the live demo */}
                  <a href={item.live} target="_blank" rel="noopener noreferrer">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
