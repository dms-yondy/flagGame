import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home'
import GameScreen from './GameScreen'

import './App.css';

class App extends React.Component {

  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/game' component={GameScreen} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
