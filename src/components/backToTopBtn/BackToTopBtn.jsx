import React, { Component } from 'react';
import { FiChevronsUp } from 'react-icons/fi';
import './backToTopBtn.css';

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
        <a href="#top">
          <button className="btnTop">
            <FiChevronsUp />
          </button>
        </a>
      </div>
    );
  }
}

export default BackToTopBtn;
