import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Layouts/Navigation/Navbar";
import M from "materialize-css";
import SignedInLinks from "../components/Layouts/Navigation/SignedInLinks";
import SignedOutLinks from "../components/Layouts/Navigation/SignedOutLinks";
import Routes from "./Routes";

export default class App extends Component {
  componentDidMount() {
    M.AutoInit();
    M.Sidenav.init("#slide-nav-right", { edge: "right" });
    M.Sidenav.init("#slide-nav-left", { edge: "left" });
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Navbar />
            <SignedInLinks />
            <SignedOutLinks />
          </header>

          <main>
            <Routes />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
