import React from "react";
import { NavLink } from "react-router-dom";

import NavbarItems from "../../constants/routes";

function Navbar() {
  let activeStyle = {
    textDecoration: "underline",
  };

  const toggleNavbar = () => {
    const menu = document.querySelector("#menu");
    menu.classList.toggle("hidden");
  };

  return (
    <nav class="flex items-center justify-between flex-wrap bg-gray-500 p-6 rounded-md">
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => toggleNavbar()}
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        class="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto"
        id="menu"
      >
        <div class="text-sm lg:flex-grow">
          {NavbarItems.filter((element) => element.name).map((item, index) => {
            return (
                <NavLink
                  className={"block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"}
                  to={item.path}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  {item.name}
                </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
