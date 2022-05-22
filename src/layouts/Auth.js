import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";


// pages

import Login from "../Pages/Login.jsx";


export default function Auth() {
  return (
    <>
      <main>
        
          <Switch>
            <Route path="/login" exact component={Login} />
            <Redirect from="/" to="/login"/> 
          </Switch>
     
      </main>
    </>
  );
}