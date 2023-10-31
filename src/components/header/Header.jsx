import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FiMenu } from 'react-icons/fi';
import Menu from '../menuTLI/Menu';
import './header.css';
import Contacts from '../contacts/Contacts';

class Header extends Component {
  state = {
    isClicked: false,
  };

  handleClickMenu = () => {
    const { isClicked } = this.state;
    if (isClicked === false) this.setState({ isClicked: true });
    if (isClicked === true) this.setState({ isClicked: false });
  };

  handleClickLink = () => {
    this.setState({ isClicked: false });
  };

  render() {
    const { isClicked } = this.state;
    return (
      <nav className="navigation">
        <div className="contacts-div">
          <Contacts />
        </div>
        <Menu
          isClicked={ isClicked }
          handleClickLink={ this.handleClickLink }
        />
        <ul id="navigation-list">
          <a href="#aboutRef"><li>Sobre</li></a>
          <a href="#projectsRef"><li>Projetos</li></a>
          <a href="#contactsRef"><li>Contatos</li></a>
          <li className="botaoMenuJs" id="threeLineIcon">
            <button
              onClick={ this.handleClickMenu }
              className="threeLineIconBtn"
            >
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
