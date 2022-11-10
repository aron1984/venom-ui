import React from 'react';
import PropTypes from 'prop-types';
import './black.css';

/**
 * Primary UI component for user interaction
 */
export const Black = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-black--primary' : 'storybook-black--secondary';
  return (
    <button
      type="button"
      className={['storybook-black', `storybook-black--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Black.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Black.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
