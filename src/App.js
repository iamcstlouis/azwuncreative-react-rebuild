import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './assets/scss/_base.scss';

import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Homepage from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Work from './pages/Work';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      // once: true,
      delay: 500
    });
  }, [])

  return (
    <div>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/about' component={About} />
        <Route path='/work' component={Work} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
