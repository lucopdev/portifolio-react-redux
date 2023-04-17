import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageComponent extends Component {
  render() {
    const { className, src, alt } = this.props;
    return (
      <div>
        <img className={ className } src={ src } alt={ alt } />
      </div>
    );
  }
}

ImageComponent.propTypes = {
  className: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageComponent;
