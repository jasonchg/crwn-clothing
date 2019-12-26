import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/Logo.svg";

import "./HeaderComponent.styles.scss";

export default function HeaderComponent() {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
}