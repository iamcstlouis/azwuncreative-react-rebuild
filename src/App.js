import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './assets/scss/_base.scss';

import Header from './components/header/header.component';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';
import Homepage from './pages/home/homepage/homepage.component';
import About from './pages/About';
import Contact from './pages/contact/contact.component';
import Footer from './components/footer/footer.component';
import Work from './pages/work/work.component';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      // once: true,
      delay: 500
    });
  })

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
