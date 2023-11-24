import { GiHamburgerMenu } from "react-icons/gi"

const Drawer = () => {
  return (
<>
  {/* Drawer - HamBurger Menu from DaisyUI only for sm devices */}
  <div className="drawer  sm:hidden">
    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      {/* Page content here */}
      <label htmlFor="my-drawer-4" className="drawer-button btn text-xl ">
        <GiHamburgerMenu />
      </label>
    </div>
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-4"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        {["about", "blogs", "career", "experience", "contact"].map(
          (nav, index) => {
            return (
              <li key={index}>
                <a
                  href={`#${nav}`}
                  className="mr-5 hover:text-gray-300 hover:cursor-pointer capitalize"
                >
                  {nav}
                </a>
              </li>
            );
          }
        )}
      </ul>
    </div>
  </div>
</>
  );
}

export default Drawer