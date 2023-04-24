import React, { Component } from 'react';
import imageList from '../../data/imageList';
import './habilities.css';
import ImageComponent from '../ImageComponent/ImageComponent';

class Habilities extends Component {
  render() {
    return (
      <section className="habilities-main-section">
        <div className="habilities-span-title">
          <span>
            Habilidades
          </span>
        </div>
        <div className="habilities-main-text-div">
          <ul className="all-logo-div">
            {imageList.map(({ className, src, alt }, index) => (
              <li key={ index }>
                <ImageComponent
                  className={ className }
                  src={ src }
                  alt={ alt }
                />
              </li>
            ))}
          </ul>
          <p>
            Como desenvolvedor web, utilizei várias tecnologias para tornar
            meu trabalho mais eficiente e produtivo, incluindo Slack, Unix,
            Git, Github, VSCode, HTML5, CSS3, JavaScript, Jest, RTL, React e Redux.
          </p>
          <p>
            O Slack permitiu uma comunicação eficiente com a equipe e a gestão
            de projetos em tempo real, enquanto o Unix personalizou meu ambiente
            de trabalho. Git e Github foram essenciais para o controle de
            versão e armazenamento de projetos.
          </p>
          <p>
            Utilizei o VSCode para escrever
            e editar códigos HTML, CSS e JavaScript, e as tecnologias HTML5,
            CSS3 e JavaScript para criar sites e aplicativos da web. Jest e RTL
            foram usados para testar meu código JavaScript e componentes React,
            e o React e Redux foram cruciais para construir aplicativos
            escaláveis e reutilizáveis. Com essas tecnologias, criei sites
            e aplicativos da web de alta qualidade e garanti que meu código
            funcionasse corretamente.
          </p>
        </div>
      </section>
    );
  }
}

export default Habilities;
