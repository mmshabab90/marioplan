import React from "react";
import { Link } from "react-router-dom";

const ProjectSummary = (props) => {
  return (
    <div className="card green lighten-2 z-depth-1">
      <div className="card-content black-text text-darken-3">
        <Link to="/">
          <span className="card-title blue-grey-text text-lighten-5">
            {props.title}
          </span>
        </Link>
        <p>Posted by: {props.postedby}</p>
        <p className="grey-text text-darken-2">{props.posteddate}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
