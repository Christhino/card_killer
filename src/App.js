import GlobalStyle from './styles/globalStyles.js';
import {
  BrowserRouter,
  Switch,
  Redirect,
  Redirecting,
  Route,
  Link
} from "react-router-dom";
import React, { useState,useEffect }  from "react"
import axios from "axios"
//pages
import Page from "./layouts/page"
//import Auth from "./layouts/Auth"
import UserProfile from "./Pages/UserProfile";
import Home from './Pages/Home.js';
import Nav from './components/Common/Nav.js';
import Plan from './Pages/Plan.jsx';
import MyCards from './Pages/Cards.js';
import EditBusinessCard from './Pages/EditBusinessCard.jsx';
import Sign_in from './Pages/Sign_in.jsx';
import Login from './Pages/Login.jsx';

function App() {

  return (
    <div className="App">
      <GlobalStyle/>
      <BrowserRouter>     
              <Switch>
                  <Route path="/home">
                      <Nav/>
                      <Home/>
                  </Route> 
                  <Route path="/user-profile">
                      <Nav/>
                      <UserProfile/>
                  </Route> 
                  <Route path="/plan">
                       <Nav/>
                      <Plan/>
                  </Route> 
                  <Route path="/saved-cards">
                      <Nav/>
                      <MyCards/>
                  </Route> 
                  <Route path="/edit-profile"> 
                    <Nav/>
                    <EditBusinessCard/>
                  </Route>
                  <Route path="/Sign_in" component={Sign_in}/>
                  <Route path="/" component={Login}/>
                  
              </Switch>  
      </BrowserRouter>
       
    </div>
  );
}

export default App;
