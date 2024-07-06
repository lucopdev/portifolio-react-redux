import React, { Component } from 'react';
import './about.css';

class About extends Component {
  render() {
    return (
      <section data-aos="fade-right" data-aos-duration="800" data-aos-delay="0" className="about-main-text-div">
        <div>
          <span id="aboutRef">Quem sou eu?</span>
        </div>
        <div className="about-main-p">
          <p>
            Sou Lucas, atualmente moro em Pelotas-RS. Atualmente estou cursando ADS na Uninter, mas tenho uma formação
            diversificada, com experiência no setor comercial, mecânica industrial, engenharia mecânica e administração.
            Hoje, estou buscando realização profissional na programação, graças à escola Trybe.
            <br />
            <br />
            Estou me desenvolvendo profissionalmente como desenvolvedor fullstack, dominando técnicas de HTML, CSS,
            JavaScript e React. Minhas habilidades principais estão em JavaScript, que utilizo tanto no front-end quanto
            no back-end, com experiência em TypeScript, NextJS, Tailwind e NodeJS.
            <br />
            <br />
            Além disso, tenho desenvolvido vários aplicativos com Flutter, e tenho conhecimentos em Java e Python,
            adquiridos através de projetos e eletivas. Sou dedicado ao uso das melhores tecnologias disponíveis e estudo
            constantemente para estar sempre à frente.
            <br />
            <br />
            Sou determinado, pragmático e gosto de resolver problemas de forma prática e rápida. Adoro desafios, não me
            abalo com falhas e trabalho bem em equipe. Sou leal, responsável e sempre buscando melhorar minhas
            habilidades para contribuir de forma significativa no mercado de trabalho.
          </p>
        </div>
      </section>
    );
  }
}

export default About;
