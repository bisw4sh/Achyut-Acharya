import resume from "../../../assets/Biswash Dhungana.pdf";

const Navbar = () => {
  // const handleResume = () => {};
  return (
    <header className=" text-gray-600">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl text-teal-400 hover:cursor-pointer max-sm:hidden">
            Achyut Babu Acharya
          </span>
          <span className="ml-3 text-xl text-teal-400 hover:cursor-pointer sm:hidden">
            ABA
          </span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {["About", "Blogs", "Career", "Experience", "Contact"].map(
            (nav, index) => {
              return (
                <a
                  // href={}
                  className="mr-5 hover:text-gray-300 hover:cursor-pointer"
                  key={index}
                >
                  {nav}
                </a>
              );
            }
          )}
        </nav>

        <button className="btn btn-accent flex items-center btn-outline rounded-lg text-sm capitalize max-md:hidden">
          <a
            href={resume}
            download="Achyut Babu Acharya"
            target="_blank"
            rel="noreferrer"
          >
            Résumé
          </a>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
