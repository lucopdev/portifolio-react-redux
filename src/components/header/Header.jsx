import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FiMenu } from 'react-icons/fi';
import Menu from '../menuTLI/Menu';
import './header.css';
import Social from '../social/Social';

class Header extends Component {
  state = {
    isClicked: false,
  };

  handleClickMenu = () => {
    const { isClicked } = this.state;
    this.setState({ isClicked: !isClicked });
  };

  handleClickLink = () => {
    this.setState({ isClicked: false });
  };

  render() {
    const { isClicked } = this.state;
    return (
      <nav className="navigation">
        <div className="contacts-div">
          <Social />
        </div>
        <Menu isClicked={ isClicked } handleClickLink={ this.handleClickLink } />
        <ul id="navigation-list">
          <a href="#aboutRef">
            <li>Sobre</li>
          </a>
          <a href="#projectsRef">
            <li>Projetos</li>
          </a>
          <a href="#contactRef">
            <li>Contato</li>
          </a>
          <li className="botaoMenuJs" id="threeLineIcon">
            <button onClick={ this.handleClickMenu } className="threeLineIconBtn">
              <FiMenu />
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  ref: state.mainReference.ref,
});

export default connect(mapStateToProps)(Header);
