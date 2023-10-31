import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { innerText } = this.props;
    return (
      <div>
        <button>{innerText}</button>
      </div>
    );
  }
}

Button.propTypes = {
  innerText: PropTypes.string.isRequired,
};

export default Button;
