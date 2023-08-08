const Contact = () => {
  return (
    // Contact section with a full-screen background color
    <div
      name="contact"
      className="w-full bg-[#0a192f] flex justify-center items-center md:pb-0 md:pt-40 p-4 pt-24 pb-8 lg:py-14"
    >
      {/* Contact form */}
      <form className="flex flex-col max-w-[600px] w-full ">
        <div className="pb-8">
          {/* Section title */}
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">Submit the form below</p>
        </div>
        {/* Input field for name */}
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        {/* Input field for email */}
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        {/* Textarea for message */}
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        {/* Submit button */}
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
