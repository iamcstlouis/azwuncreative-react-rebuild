import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/header/header.component';
import Homepage from './pages/home/homepage/homepage.component';
import About from './pages/about/about.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;
