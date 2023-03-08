import { GiHummingbird } from "react-icons/gi";

const NavBar = () => {
  return (
    <div className="navbar bg-gradient-to-r  from-black text-white">
      <a className="btn btn-ghost normal-bold text-5xl" data-cy="siteHeader">
        <GiHummingbird />
        Twitcher
      </a>
    </div>
  );
};

export default NavBar;
