import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="Logo">
        <img className="w-25" src={logo} alt="logo" />
      </div>
      <nav className="bg-dark">
        <ul className="d-flex nav-ul">
          <li>
            <a className="text-light" href="/shop">
              Shop
            </a>
          </li>
          <li>
            <a className="text-light" href="/order">
              Order Review
            </a>
          </li>
          <li>
            <a className="text-light" href="/inventory">
              Manage Inventory here
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
