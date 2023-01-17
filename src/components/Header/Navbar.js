import React from 'react'
import { NavLink } from "react-router-dom";

import NavbarItems from "../../constants/routes";

function Navbar() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <div className='navbar'>
      <ul className='flex gap-2 justify-between'>
        {
          NavbarItems.filter(element => element.name).map((item, index) => {
            return (
              <li key={index} className="inline-block">
                <NavLink
                  to={item.path}
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Navbar