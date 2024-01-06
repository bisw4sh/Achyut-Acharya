import { Outlet, Link } from "react-router-dom";
import { IoReturnUpBackOutline } from "react-icons/io5";

export default function Nav() {
  return (
    <>
      <div>
        <Link to="/" className="btn btn-ghost">
          <IoReturnUpBackOutline className="text-2xl"/>
          Home
        </Link>
      </div>
      <Outlet />
    </>
  );
}
