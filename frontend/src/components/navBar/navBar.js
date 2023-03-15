import { IoEye } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="navbar bg-gradient-to-r  from-black text-white">
      <a
        href="/"
        className="btn btn-ghost normal-bold text-xl normal-case"
        data-cy="siteHeader"
      >
        <span className="pl-1">
          <IoEye />
        </span>
        <span className="pl-1">
          <IoEye />
        </span>
        <span className="pl-2">Twitcher</span>
      </a>
    </div>
  );
};

export default NavBar;
