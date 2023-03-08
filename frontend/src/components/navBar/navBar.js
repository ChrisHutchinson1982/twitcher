import { GiHummingbird } from "react-icons/gi";

const NavBar = () => {
  return (
    <div className="navbar bg-gradient-to-r  from-black text-white">
      <a className="btn btn-ghost normal-bold text-5xl" data-cy="siteHeader">
        <span className="pl-1">
          <GiHummingbird />
        </span>
        <span className="pl-2">Twitcher</span>
      </a>
    </div>
  );
};

export default NavBar;
