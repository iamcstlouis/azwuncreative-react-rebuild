import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/header/header.component';
import Homepage from './pages/home/homepage/homepage.component';
import Work from './pages/work/work.component';
import About from './pages/about/about.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/about' component={About} />
        <Route path='/work' component={Work} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
