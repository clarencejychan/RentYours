import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import AddItems from './components/addItems/addItems';
import SearchResults from './components/searchResults/searchResults';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/listproject' component={AddItems} />
        <Route path='/search' component={SearchResults} />
      </Switch>
    );
  }
}

export default App;
