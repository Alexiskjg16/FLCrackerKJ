import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './ComponentPages/HomePage.js';
import FloridaMan from './ComponentPages/FloridaMan.js';
import CrackerCooking from './ComponentPages/CrackerCooking.js';
import SCSunday from './ComponentPages/SelfCareSunday.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Router>
          <nav className="navbar">
            <Link to="/" className="navlinks">Home</Link>
            <Link to="/FLMan" className="navlinks">#FloridaManFriday</Link>
            <Link to="/SCSunday" className="navlinks">#SelfcareSunday</Link>
            <Link to="/CrackerCooking" className="navlinks">Cracker Cooking</Link>
          </nav>
          <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/FLMan" exact component={FloridaMan} />
              <Route path="/SCSunday" exact component={SCSunday} />
              <Route path="/CrackerCooking" exact component={CrackerCooking} />
          </Switch>
          <footer className="footer">
            <h4>C 2019 AKG</h4>
          </footer>
        </Router>
      </div>
    );
  }
}

export default App;
