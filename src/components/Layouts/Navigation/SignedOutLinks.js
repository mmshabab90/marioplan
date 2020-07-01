import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul
      className="sidenav right green lighten-4 z-depth-2 sidenav-close"
      id="slide-nav-right"
    >
      <li>
        <NavLink to="/signin">
          <i className="left material-icons">lock_open</i> Sign In
        </NavLink>
      </li>
      <li>
        <NavLink to="/signup">
          <i className="left material-icons">group_add</i> Sign Up
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
