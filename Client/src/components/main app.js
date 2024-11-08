import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Welcome from './welcomeelcome';
import SignUp from './signupignUp';
import Login from './loginogin';
import QRCodeGenerator from './QRcodegenerator';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/qrcode" component={QRCodeGenerator} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
