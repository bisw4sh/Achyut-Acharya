import resume from "../../../assets/Biswash Dhungana.pdf";
// import { GiHamburgerMenu } from "react-icons/gi"
import Hamburger from './Hamburger.jsx'
import { MdDarkMode } from "react-icons/md";
import { PiSunDimFill } from "react-icons/pi";

const Navbar = ({mode, setMode}) => {

  const handleMode = () => {
    setMode( mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="px-4 pt-2 relative flex justify-between items-center">
      <a
        href="/"
        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <span className="text-xl  text-teal-400 hover:cursor-pointer max-md:hidden">
          Achyut Babu Acharya
        </span>
        <span className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-teal-400 to-teal-950 hover:cursor-pointer md:hidden">
          ABA
        </span>
      </a>
      <nav className="max-sm:hidden flex items-center text-base justify-center">
        {["about", "career", "experience", "blogs", "contact"].map(
          (nav, index) => {
            return (
              <a
                href={`#${nav}`}
                className="mr-5 hover:text-gray-300 hover:cursor-pointer capitalize"
                key={index}
              >
                {nav}
              </a>
            );
          }
        )}
      </nav>
      <span className="flex items-center justify-between gap-2 ">
        <button className="btn text-2xl">
          {mode === "dark" ? (
            <MdDarkMode className="fill-sky-700 h-full" onClick={handleMode} />
          ) : (
            <PiSunDimFill
              className="fill-yellow-300 h-full"
              onClick={handleMode}
            />
          )}
        </button>
        <Hamburger />
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
      </span>
    </div>
  );
};

export default Navbar;
