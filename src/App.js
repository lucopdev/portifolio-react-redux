import React, { Component } from 'react';
import AOS from 'aos';
import BackToTopBtn from './components/backToTopBtn/BackToTopBtn';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import 'aos/dist/aos.css';

class App extends Component {
  render() {
    AOS.init({
      offset: 100,
    });
    return (
      <section id="top" className="main-app">
        <Home />
        <Footer />
        <BackToTopBtn />
      </section>
    );
  }
}

export default App;
