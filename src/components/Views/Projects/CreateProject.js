import React, { Component } from "react";
//import M from "materialize-css";
export class CreateProject extends Component {
  state = {
    title: "",
    content: "",
  };

  componentDidMount() {}

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
            Create New Project
          </h5>
          {/* Project title field */}
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.onChange} />
          </div>

          {/* Project content field */}
          <div className="input-field">
            <label htmlFor="content">Description</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.onChange}
            />
          </div>

          {/* button section */}
          <div className="input-field center">
            <button className="btn pink lighten-1 z-depth-3">
              <i className="left material-icons">publish</i> Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateProject;
