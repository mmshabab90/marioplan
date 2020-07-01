import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class SignedInLinks extends Component {
  render() {
    return (
      <ul
        className="sidenav sidenav-fixed left z-depth-2 cyan lighten-4 sidenav-close"
        id="slide-nav-left"
      >
        <li>
          <NavLink to="/" className="btn pink lighten-1">
            MS
          </NavLink>
        </li>
        <li>
          <NavLink to="/new-project">
            <i className="left material-icons">library_add</i> New Project
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <i className="left material-icons">lock_outline</i> Sign Out
          </NavLink>
        </li>
      </ul>
    );
  }
}
