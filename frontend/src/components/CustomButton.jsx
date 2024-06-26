const CustomButton = () => {
  return (
    <div className="flex justify-center">
      <a
        href="https://www.gits.ac.in/apply-online/"
        target="_blank"
        rel="noopener noreferrer"
        className="custom-btn relative inline-block text-white uppercase tracking-wider py-1 lg:py-2 px-5 lg:px-10 font-semibold textsm lg:text-lg rounded-lg bg-secondary border-2 border-secondary overflow-hidden group"
      >
        <span className=" relative z-[5] inset-0 group-hover:text-transparent group-hover:bg-gradient-to-r from-secondary to-secondary group-hover:bg-clip-text group-hover:transition-colors duration-500 ease-out">Apply Now</span>
        <span className="absolute inset-0 bg-white transform scale-x-0 transition-transform duration-500 ease-out origin-left z-0 group-hover:scale-x-100"></span>
      </a>
    </div>
  );
};

export default CustomButton;
