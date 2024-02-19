import React, { Component } from 'react';
import './social.css';
import { Link } from 'react-router-dom';
import iconInsta from '../../image/icons/icon_insta.png';
import iconIn from '../../image/icons/icon_in.png';
import iconGh from '../../image/icons/icon_gh.png';

class Contacts extends Component {
  render() {
    return (
      <div className="social-links">
        <Link to={ { pathname: 'https://www.instagram.com/lucopdev/' } } target="blank">
          <div className="social-btn flex-center instagram">
            <img src={ iconInsta } alt="" />
            <span>@lucopdev</span>
          </div>
        </Link>

        <Link to={ { pathname: 'https://www.linkedin.com/in/lsrdev/' } } target="blank">
          <div className="social-btn flex-center">
            <img src={ iconIn } alt="" />
            <span>@lsrdev</span>
          </div>
        </Link>

        <Link to={ { pathname: 'https://github.com/lucopdev' } } target="blank">
          <div className="social-btn flex-center github">
            <img src={ iconGh } alt="" />
            <span>@lucopdev</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default Contacts;
