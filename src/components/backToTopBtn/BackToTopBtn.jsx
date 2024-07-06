import React, { Component } from 'react';
import { FiChevronsUp } from 'react-icons/fi';
import './backToTopBtn.css';
import ScrollLink from '../ScrollLink/ScrollLink';

class BackToTopBtn extends Component {
  state = {
    isVisible: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScrollVisible);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollVisible);
  }

  onScrollVisible = () => {
    const displayHeight = 400;
    if (window.scrollY <= displayHeight) {
      this.setState({ isVisible: false });
    } else {
      this.setState({ isVisible: true });
    }
  };

  render() {
    const { isVisible } = this.state;
    return (
      <div className={ isVisible ? 'backToTopBtn-div' : 'btnTopOff' }>
        <ScrollLink to="#top">
          <button className="btnTop">
            <FiChevronsUp />
          </button>
        </ScrollLink>
      </div>
    );
  }
}

export default BackToTopBtn;
