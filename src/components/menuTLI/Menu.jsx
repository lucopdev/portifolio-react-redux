import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './menu.css';

class Menu extends Component {
  render() {
    const { handleClickLink, isClicked } = this.props;
    return (
      <div
        className={ `menu-tli  ${isClicked ? 'appear' : 'disappear'}` }
      >
        <ul>
          <a onClick={ handleClickLink } href="#aboutRef"><li>Sobre</li></a>
          <a onClick={ handleClickLink } href="#projectsRef"><li>Projetos</li></a>
          <a onClick={ handleClickLink } href="#contactsRef"><li>Contatos</li></a>
        </ul>
      </div>
    );
  }
}

Menu.propTypes = {
  handleClickLink: PropTypes.func.isRequired,
  isClicked: PropTypes.bool.isRequired,
};

export default Menu;
