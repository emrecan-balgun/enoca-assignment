import React from "react";

import Navbar from "./Navbar";
import Search from "./Search";
import Name from "./Name";

function Header() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <Name />
          <Search />
        </div>
        <Navbar />
      </div>
    </>
  );
}

export default Header;
