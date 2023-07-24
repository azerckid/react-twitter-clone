import React from "react";
// import ReactDOM from "react-dom/client";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../routes/Home";
import Auth from "../routes/Auth";
import Profile from "../routes/Profile";
import EditProfile from "../routes/EditProfile";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <Route exact path="/" component={Home} />
        ) : (
          <>
            <Route exact path="/" component={Auth} />
            <Route exact path="/edit-profile" component={EditProfile} />
            <Route exact path="/profile/:id" component={Profile} />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
