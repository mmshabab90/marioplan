import React, { Component } from "react";

export class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.onSubmit}>
          <h5
            className="grey-text text-darken-3"
            style={{ marginBottom: "25px" }}
          >
            Sign In
          </h5>
          {/* email field */}
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.onChange} />
          </div>

          {/* password field */}
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.onChange} />
          </div>

          {/* button section */}
          <div className="input-field center">
            <button className="btn pink lighten-1 z-depth-2">
              <i className="left material-icons">lock_open</i> Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
