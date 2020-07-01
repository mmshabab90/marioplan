import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav wrapper red lighten-2 z-depth-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>

        <a href="/# " data-target="slide-nav-left" className="left sidenav-trigger hide-on-medium-and-up">
            <i className="material-icons">menu</i>
        </a>

        <a href="/# " data-target="slide-nav-right" className="right sidenav-trigger hide-on-medium-and-up">
            <i className="material-icons">menu</i>
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
