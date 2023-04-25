import React, { Component } from 'react';
import './header.css';
import { connect } from 'react-redux';
import { FiMenu } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { makeRef } from '../../redux/actions';

class Header extends Component {
  render() {
    return (
      <nav className="navigation">
        <ul id="navigation-list">
          <a href="#aboutRef"><li>Sobre</li></a>
          <a href="#projectsRef"><li>Projetos</li></a>
          <a href="#contactsRef"><li>Contatos</li></a>
          <li className="botaoMenuJs" id="threeLineIcon">
            <button className="threeLineIconBtn">
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
