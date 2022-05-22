import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// pages
import Home from "../Pages/Home"
import UserProfile from "../Pages/UserProfile"
import Plan from "../Pages/Plan"
import MyCards from  "../Pages/Cards"
import Nav from "../components/Common/Nav";
import EditBusinessCard from "../Pages/EditBusinessCard";
export default function Page() {
  return (
    <>
     
      <Switch>
            <Nav/>
            <Route path="/home" exact component={Home} />
            <Route path="/user-profile" exact component={UserProfile} />
            <Route path="/plan" exact component={Plan} />

            <Route path="/saved-cards" exact  component={MyCards} />
            <Route path="/edit-profile" exact  component={EditBusinessCard} />
            <Redirect to="/" from="/home"/>
      </Switch>
    </>
  );
}