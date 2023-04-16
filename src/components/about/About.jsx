import React, { Component } from 'react';
import './about.css';

class About extends Component {
  render() {
    return (
      <section className="about-main-text-div">
        <span>
          Quem sou eu?
        </span>
        <p>
          Sou Lucas, atualmente moro em Pelotas-RS.
          Após anos trabalhando no setor comercial,
          me formar em mecânica industrial e trabalhar como técnico mecânico,
          cursar engenharia mecânica e sair direto para
          administrador do meu próprio negócio,
          hoje estou buscando a minha realização profissional com a programação
          e graças a escola Trybe estou conseguindo realizar esse sonho.
        </p>
        <p>
          Estou atualmente em desenvolvimento profissional.
          Aprendendo a dominar as técnicas de HTML, CSS,
          JavaScript, React, e muito mais tanto no front quanto no back-end
          de forma que me forme um excelente desenvolvedor fullstack.
        </p>
        <p>
          Absorver conhecimento com velocidade e solidez diariamente
          é o que me tornará melhor e mais forte para conquistar o objetivo da vida,
          que é me tornar um programador cada dia mais responsável
          para o mercado de trabalho!
        </p>
      </section>
    );
  }
}

export default About;
