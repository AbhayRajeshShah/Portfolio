import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./components/home/home.jsx"
import Project from "./components/projects/project.jsx"
import About from "./components/about/about"
import Contact from "./components/contact/contact"
import Dashboard from "./dashboard/dashboard"
import {HashRouter as Router,Switch,Route} from "react-router-dom"

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
      <Home/>
        </Route>
        <Route exact path="/projects">
      <Project/>
        </Route>
        <Route exact path="/about">
      <About/>
        </Route>
        <Route exact path="/contact">
      <Contact/>
        </Route>
        <Route exact path={process.env.REACT_APP_DETAILS}>
      <Dashboard/>
        </Route>
    </Switch>
  </Router>

  ,
  document.getElementById('root')
);


