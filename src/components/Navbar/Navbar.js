import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/weather">Weather</Link>
      </li>
      <li>
        <Link to="/liveVideo">LiveView</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-slate-700">
      <div className="navbar-start lg:ml-24 ml-4">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl text-white">The Weather</a>
      </div>
      <div className="navbar-end hidden lg:flex lg:mr-24 mr-4">
        <ul className="menu menu-horizontal p-0 text-white">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
