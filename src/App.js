import React from 'react';
import './css/App.css';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Certificates from './Certificates';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Work />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/certificates">
            <Certificates />
          </Route> 
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App
