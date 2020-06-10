import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Homepage from './pages/home/homepage/homepage.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
