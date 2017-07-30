import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
      </Switch>
    );
  }
}

export default App;
