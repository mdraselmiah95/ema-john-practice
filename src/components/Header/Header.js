import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
const Header = () => {
  const Font = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div>
      <div className="Logo">
        <img className="w-25" src={logo} alt="logo" />
      </div>
      <nav className="bg-dark">
        <ul
          className="
        d-flex nav-ul"
        >
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
        <div className="bg-dark pb-4 text-center">
          <input
            className="w-50"
            type="text"
            id=""
            placeholder="Search your product"
          />
          <span className="text-light m-2">{Font}</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
