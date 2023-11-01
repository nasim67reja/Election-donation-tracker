import Button from "../common/Button";

const Form = () => {
  return (
    <form className="flex flex-wrap mt-8 gap-8">
      {/* First Row */}
      <div className="flex  gap-8 w-full">
        <div className="w-full md:w-1/2">
          <input
            className="appearance-none border border-[#CED4DA] rounded w-full py-2 xl:py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-small bg-bgPrimary focus:bg-white focus:border-primary"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="w-full md:w-1/2">
          <input
            className="appearance-none border rounded w-full py-2 xl:py-4 px-4 text-gray-700 border-[#CED4DA] leading-tight focus:outline-none focus:shadow-outline text-small bg-bgPrimary focus:bg-white focus:border-primary"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="flex  gap-8 w-full">
        <div className="w-full md:w-1/2">
          <input
            className="appearance-none border rounded w-full py-2 xl:py-4 px-4 text-gray-700 border-[#CED4DA] leading-tight focus:outline-none focus:shadow-outline text-small bg-bgPrimary focus:bg-white focus:border-primary"
            id="contact"
            type="tel"
            placeholder="Enter your contact no."
          />
        </div>
        <div className="w-full md:w-1/2">
          <input
            className="appearance-none border rounded w-full py-2 xl:py-4 px-4 text-gray-700 border-[#CED4DA] leading-tight focus:outline-none focus:shadow-outline text-small bg-bgPrimary focus:bg-white focus:border-primary"
            id="subject"
            type="text"
            placeholder="Enter subject"
          />
        </div>
      </div>

      {/* Third Row */}
      <div className="w-full">
        <textarea
          className="appearance-none border border-[#CED4DA] rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-44 resize-none text-small bg-bgPrimary focus:bg-white focus:border-primary"
          id="description"
          placeholder="Enter your description"
        ></textarea>
      </div>

      {/* Button */}
      <Button
        type="submit"
        className="text-white hover:opacity-80 bg-primary font-semibold w-full  md:w-auto"
      >
        Send Message
      </Button>
    </form>
  );
};

export default Form;
