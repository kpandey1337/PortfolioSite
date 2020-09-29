import React from "react";
import {Link} from "react-router-dom";
function NavigationMenu(props) {
  return (
    <div>
      <div className="font-bold py-3 pl-3">Kunal Pandey</div>
      <ul className="pl-8">
        <li>
          <Link
            to="/PortfolioSite"
            className="text-blue-500 py-3 border-t border-b block"
            onClick={props.closeMenu}
          >
            Home
          </Link>
        </li>
        {/* <li>
          <Link
            to="/about"
            className="text-blue-500 py-3 border-t border-b block"
            onClick={props.closeMenu}
          >
            About
          </Link>
        </li>
*/}
        <li>
          <Link
            to="/contactMe"
            className="text-blue-500 py-3 border-t border-b block"
            onClick={props.closeMenu}
          >
            Contact Me
          </Link>
          <li>
            <Link
              to="/Minesweeper"
              className="text-blue-500 py-3 border-t border-b block"
              onClick={props.closeMenu}
            >
              MineSweeper WIP
            </Link>
          </li>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;
