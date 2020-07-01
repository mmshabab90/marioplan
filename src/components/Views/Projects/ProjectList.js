import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = () => {
  return (
    <div className="project-list section">
      <div className="project-summary">
        <ProjectSummary
          title="Project Title-1"
          postedby="MS"
          posteddate="1st July 2020, 10:30 AM"
        />
        <ProjectSummary
          title="Project Title-2"
          postedby="MS"
          posteddate="1st July 2020, 11:30 AM"
        />
        <ProjectSummary
          title="Project Title-3"
          postedby="MS"
          posteddate="1st July 2020, 12:00 PM"
        />
      </div>
    </div>
  );
};

export default ProjectList;
