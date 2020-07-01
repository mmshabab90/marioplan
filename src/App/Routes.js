import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../components/Views/Dashboard/Dashboard";
import ProjectDetails from "../components/Views/Projects/ProjectDetails";
import SignIn from "../components/Authentication/SignIn";
import SignUp from "../components/Authentication/SignUp";
import CreateProject from "../components/Views/Projects/CreateProject";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/project/:id" component={ProjectDetails} />
      <Route path="/new-project" component={CreateProject} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default Routes;
