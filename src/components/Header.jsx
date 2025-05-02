import { Auth } from "@/components";
import { Link } from "react-router-dom";
import { links } from "@/constants";
import { useAuthStatus } from "@/hooks";

const Header = () => {

  const isLoggedIn = useAuthStatus();

  return (
    <div className="navbar bg-primary">
      <div className="navbar-start">
      {isLoggedIn && (
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost text-primary-content lg:hidden ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links.map((link, index) => (
              <li key={index}><Link to={link.to} className="uppercase font-bold">{link.name}</Link></li>
            ))}
          </ul>
        </div>
      )}
        <Link to='/' className="btn btn-ghost text-xl text-primary-content hover:btn-primary">Firebase Notes</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-primary-content">
          {isLoggedIn && links.map((link, index) => (
            <li key={index}><Link to={link.to} className="uppercase font-bold">{link.name}</Link></li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Auth />
      </div>
    </div>
  );
};

export default Header;
