import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import AddItems from './components/addItems/addItems';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/addlisting' component={AddItems} />
      </Switch>
    );
  }
}

export default App;
