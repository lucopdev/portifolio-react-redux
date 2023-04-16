import React, { Component } from 'react';

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
