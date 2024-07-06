import React from 'react';
import propTypes from 'prop-types';

function ScrollLink({ to, children, ...props }) {
  const handleClick = (event) => {
    event.preventDefault();
    const element = document.querySelector(to);
    element.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <a href={ to } onClick={ handleClick } { ...props }>
      {children}
    </a>
  );
}

ScrollLink.propTypes = {
  to: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default ScrollLink;
