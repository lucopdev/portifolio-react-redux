import React, { Component } from 'react';
import imageList from '../../data/imageList';
import './habilities.css';
import ImageComponent from '../ImageComponent/ImageComponent';

class Habilities extends Component {
  render() {
    return (
      <section className="habilities-main-section">
        <span>
          Habilidades
        </span>
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
            Como desenvolvedor web, eu trabalhei com uma ampla variedade
            de tecnologias que ajudaram a tornar meu trabalho mais eficiente
            e produtivo. No meu processo de desenvolvimento,
            usei ferramentas como Slack, Unix, Git, Github,
            VSCode, HTML5, CSS3, JavaScript, Jest, RTL, React e Redux.
          </p>
          <p>
            Começando com Slack, é uma plataforma de comunicação que
            me ajudou a colaborar de forma mais eficiente com minha
            equipe e gerenciar projetos em tempo real. O Slack nos
            permitiu compartilhar ideias e arquivos, além de coordenar
            nossas atividades com mais facilidade.
          </p>
          <p>
            Unix é um sistema operacional de código aberto que usei para
            configurar e gerenciar meu ambiente de desenvolvimento.
            Com Unix, pude personalizar meu ambiente de trabalho
            e aumentar minha produtividade.
          </p>
          <p>
            Git e Github foram essenciais para meu trabalho de controle de versão.
            Git me permitiu gerenciar o código fonte e as alterações ao longo do tempo,
            enquanto o Github me permitiu armazenar e compartilhar meus projetos
            com outras pessoas. Além disso, o Github é uma excelente plataforma
            para colaboração e revisão de código.
          </p>
          <p>
            VSCode é um editor de código altamente personalizável
            que usei para escrever e editar meu código HTML,
            CSS e JavaScript. O VSCode possui uma ampla variedade de recursos,
            como realce de sintaxe, autocompletar e depuração de código.
          </p>
          <p>
            HTML5, CSS3 e JavaScript são as principais tecnologias
            de desenvolvimento web que usei para criar sites e aplicativos da web.
            HTML5 é a linguagem de marcação que usamos para estruturar
            nosso conteúdo na web, enquanto CSS3 nos permite estilizar
            e projetar nossos sites. JavaScript é a linguagem de programação
            que usamos para adicionar interatividade e dinamismo
            aos nossos sites e aplicativos.
          </p>
          <p>
            Jest e RTL são ferramentas de teste que usei para garantir
            que meu código funcionasse corretamente e sem erros.
            Jest é uma estrutura de teste que usei para escrever
            testes automatizados para meu código JavaScript. Já o RTL,
            que significa React Testing Library, é uma biblioteca de
            teste que usei para testar meus componentes React.
          </p>
          <p>
            Por fim, usei o React e o Redux para construir aplicativos
            da web escaláveis e reutilizáveis. O React é uma biblioteca
            JavaScript de código aberto que usei para construir interfaces
            de usuário dinâmicas e interativas, enquanto o Redux é uma
            biblioteca de gerenciamento de estado que usei para gerenciar
            o estado do aplicativo de maneira consistente.
          </p>
          <p>
            Em resumo, essas tecnologias foram cruciais para meu trabalho
            como desenvolvedor web. Com elas, pude criar sites e aplicativos
            da web de alta qualidade e garantir que meu código funcionasse
            corretamente.
          </p>
        </div>
      </section>
    );
  }
}

export default Habilities;
