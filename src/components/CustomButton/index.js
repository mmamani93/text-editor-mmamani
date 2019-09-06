import React from 'react';
import { func, string } from 'prop-types';

import './styles.css';

function CustomButton({ onClick, className, text }) {
  return (
      <button type="button" className={className} onClick={onClick}>
        {text}
      </button>
  );
}

CustomButton.propTypes = {
  onClick: func.isRequired,
  className: string,
  text: string
};

CustomButton.defaultProps = {
  className: "button",
  text: 'Button'
}

export default CustomButton;
