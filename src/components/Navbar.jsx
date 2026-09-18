import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="main-nav w-screen bg-teal-500 h-fit overflow-hidden max-[100%]:">
      <div className=" nav-wrapper py-4 lg:px-8 px-8 max-w-7xl h-16 m-auto text-white flex items-center justify-between">
        <div>
          {/* Home link start  */}
          <Link to="/">
            <h1 className="lg:text-2xl text-xl uppercase tracking-wider cursor-pointer font-bold">
              Movie Explorer
            </h1>
          </Link>
          {/* Home link ended  */}
        </div>

        {/* start nav links group/wrapper */}
        <div
          className="flex lg:gap-8 gap-6 uppercase tracking-wider cursor-pointer text-lg items-center"
          id="navItems"
        >
          {/* 

className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
  
  className={({ isActive }) =>
              `rounded-lg px-4 py-2 font-medium group ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`
            }
  className="group"
  */}

          <NavLink
            to="/home"
            className={({ isActive }) =>
              `group  px-4 py-2   ${
                isActive ? " text-white font-bold" : " text-white "
              } `
            }
          >
            {({ isActive }) => (
              <>
                Home
                <div
                  className={` ${isActive ? "w-full" : "w-0 group-hover:w-full"} h-0.5 bg-white ease-in-out duration-500`}
                ></div>
              </>
            )}
          </NavLink>

          <NavLink to="movies" className="group px-4 text-white">
            {({ isActive }) => (
              <>
                Movies
                <div
                  className={` ${isActive ? "w-full" : "w-0 group-hover:w-full"}  h-0.5 bg-white ease-in-out duration-500`}
                ></div>
              </>
            )}
          </NavLink>
        </div>

        {/* end nav links group/wrapper */}

        {/* to come */}
        {/* hidden the mobile version for now */}
        {/* <div
          id="hamburger"
          className="fa fa-bars flex items-center text-xl"
          style={{ display: "hidden" }}
        ></div>
        <div
          id="mobileNav"
          className="fixed flex flex-col gap-8 pt-16 px-4 text-xl uppercase bg-teal-500 h-full inset-0 top-16 w-[70%] left-[-70%] ease-in-out duration-500 cursor-pointer"
        >
          <span>Services</span>
          <span>About</span>
          <span>Contact</span>
        </div> */}
      </div>
    </nav>
  );
}
