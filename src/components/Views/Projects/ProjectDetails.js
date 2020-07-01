import React from "react";

const ProjectDetails = (props) => {
  // id from url
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title [ID: {id}]</span>
          <p className="flow-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra
            vel turpis nunc eget. Faucibus in ornare quam viverra orci sagittis.
            Justo nec ultrices dui sapien eget mi proin sed libero. Cursus
            turpis massa tincidunt dui. Auctor augue mauris augue neque. Massa
            tincidunt dui ut ornare lectus sit. Nibh tortor id aliquet lectus
            proin nibh nisl condimentum. Eget nulla facilisi etiam dignissim
            diam. Sapien nec sagittis aliquam malesuada. Lectus mauris ultrices
            eros in. Non enim praesent elementum facilisis leo vel fringilla est
            ullamcorper. Ipsum nunc aliquet bibendum enim.
          </p>
        </div>

        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by: MS</div>
          <div>Posted on: 1st July 2020, at 11:10 AM</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
