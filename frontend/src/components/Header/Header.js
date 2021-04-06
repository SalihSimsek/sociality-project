import React from "react";
import "./Header.css";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="header_containerLogo">
          <Link to="/">
            <h1>ECommerce</h1>
          </Link>
        </div>
        <div className="header_containerMenu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/save-product">Save Product</Link>
            </li>
          </ul>
        </div>
        <div className="header_containerCart">
          <ShoppingCartIcon className="cartIcon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
