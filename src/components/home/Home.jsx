import React, { Component } from 'react';
import euzinho from '../../image/euzinho.jpg';
import './Home.css';
import Header from '../header/Header';
import About from '../about/About';
import Habilities from '../habilities/Habilities';
import Footer from '../footer/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <section id="profile">

          <div id="container-img-div">
            <div id="img-profile-div">
              <img
                id="imgProfile"
                src={ euzinho }
                alt="Foto de perfil Lucas Silveira da Rosa"
              />
            </div>
          </div>

          <div id="name-profile-div">
            <h1 id="name" className="hero-title">WEB developer</h1>
            <span>Portifólio</span>
            <p id="paragraph-text">
              Veja mais detalhes sobre mim,
              meus exercícios e projetos realizados ao longo de 2023 na Trybe
            </p>
          </div>
        </section>

        <section id="text-container">
          <About />
          <Habilities />
        </section>

        <Footer />
      </div>
    );
  }
}

export default Home;
