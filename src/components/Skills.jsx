import { skillsData } from "../data/skillsData";

const Skills = () => {
  // Fetch the skills data from the imported file
  const mySkills = skillsData;

  return (
    // Skills section with a full-screen background color
    <div
      name="skills"
      className="w-full h-screen bg-[#0a192f] text-gray-300 sm:pb-0 pt-10 "
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Section title */}
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        {/* Grid layout for displaying skills */}
        <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-4 text-center py-8">
          {/* Render each skill item */}
          {mySkills.map((item) => (
            <div
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
              key={item.id}
            >
              <img className="w-20 mx-auto" src={item.image} alt={item.alt} />
              <p className="my-4">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
