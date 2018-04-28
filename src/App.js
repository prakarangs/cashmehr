import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './assets/logo.svg';
import './style/App.css';

import Home from './Home';
import Inventory from './Inventory';
import Casher from './Casher';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/inventory">Inventory</Link>
            </li>
            <li>
              <Link to="/casher">Casher</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home}/>
          <Route exact path="/inventory" component={Inventory}/>
          <Route exact path="/casher" component={Casher}/>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
