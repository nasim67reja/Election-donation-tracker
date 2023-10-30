import Button from "../common/Button";

const Form = () => {
  return (
    <form className="flex flex-col items-center mt-8 gap-8">
      <input
        className="appearance-none border border-[#CED4DA] rounded w-full py-2 xl:py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-small bg-bgPrimary focus:bg-white focus:border-primary"
        id="name"
        type="text"
        placeholder="Enter your name"
      />
      <input
        className="appearance-none border rounded w-full py-2 xl:py-4 px-4 text-gray-700 border-[#CED4DA] leading-tight focus:outline-none focus:shadow-outline text-small bg-bgPrimary focus:bg-white focus:border-primary"
        id="email"
        type="email"
        placeholder="Enter your email"
      />
      <input
        className="appearance-none border rounded w-full py-2 xl:py-4 px-4 text-gray-700 border-[#CED4DA] leading-tight focus:outline-none focus:shadow-outline text-small bg-bgPrimary focus:bg-white focus:border-primary"
        id="contact"
        type="tel"
        placeholder="Enter your contact no."
      />

      <textarea
        className="appearance-none border border-[#CED4DA] rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-44 resize-none text-small bg-bgPrimary focus:bg-white focus:border-primary"
        id="description"
        placeholder="Enter your description"
      ></textarea>

      <Button
        type="submit"
        className="text-white hover:opacity-80 bg-primary font-semibold"
      >
        Send Message
      </Button>
    </form>
  );
};

export default Form;
