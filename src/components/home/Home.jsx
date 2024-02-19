import React, { Component } from 'react';
import euzinho from '../../image/tryber.png';
import Header from '../header/Header';
import About from '../about/About';
import Habilities from '../habilities/Habilities';
import Projects from '../projects/Projects';
import './Home.css';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="header-container">
          <Header />
        </div>
        <section id="profile">
          <div className="img-div">
            <img
              data-aos="fade-up"
              data-aos-duration="2500"
              id="imgProfile"
              src={ euzinho }
              alt="Foto de perfil Lucas Silveira da Rosa"
              height="458px"
              width="450px"
              allow="unsized-media 'none'"
            />
          </div>

          <div id="name-profile-div">
            <h1 id="name" className="hero-title">
              Web developer
            </h1>
            <span>Portifólio</span>
            <p id="presentation-text">
              Veja mais detalhes sobre mim,
              meus exercícios realizados na Trybe e projetos pessoais
              ao longo de 2023 e 2024.
            </p>
          </div>
        </section>

        <section id="contents-container">
          <div className="contents">
            <About />
          </div>
          <div className="contents">
            <Habilities />
          </div>
        </section>
        <div className="projects-container">
          <Projects />
        </div>
        <div className="contact-container">
          <Contact />
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
