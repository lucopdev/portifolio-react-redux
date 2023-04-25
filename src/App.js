import React, { Component } from 'react';
import Home from './components/home/Home';
import './App.css';
import Footer from './components/footer/Footer';
import BackToTopBtn from './components/backToTopBtn/BackToTopBtn';

class App extends Component {
  render() {
    return (
      <section>
        <Home />
        <Footer />
        <BackToTopBtn />
      </section>
    );
  }
}

export default App;
