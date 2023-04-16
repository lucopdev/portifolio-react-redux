import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navigation">
          <ul id="navigation-list">
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Contatos</li>
            <li className="botaoMenuJs" id="threeLineIcon">&#9776;</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
