import React, { Component } from 'react';
import './about.css';

class About extends Component {
  render() {
    return (
      <section
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-delay="0"
        className="about-main-text-div"
      >
        <div>
          <span id="aboutRef">
            Quem sou eu?
          </span>
        </div>
        <div className="about-main-p">
          <p>
            Sou Lucas, atualmente moro em Pelotas-RS.
            Após anos trabalhando no setor comercial,
            me formar em mecânica industrial e trabalhar como técnico mecânico,
            cursar engenharia mecânica e sair direto para
            administrador do meu próprio negócio,
            hoje estou buscando a minha realização profissional com a programação
            e graças a escola Trybe estou conseguindo realizar esse sonho.
            <br />
            <br />
            Estou atualmente em desenvolvimento profissional.
            Aprendendo a dominar as técnicas de HTML, CSS,
            JavaScript, React, e muito mais tanto no front quanto no back-end
            de forma que me forme um excelente desenvolvedor fullstack.
            <br />
            <br />
            Absorver conhecimento com velocidade e solidez diariamente
            é o que me tornará melhor e mais forte para conquistar o objetivo da vida,
            que é me tornar um programador cada dia mais responsável
            para o mercado de trabalho!
          </p>
        </div>
      </section>
    );
  }
}

export default About;
