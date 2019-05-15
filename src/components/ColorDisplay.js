import React from 'react';
import PropTypes from 'prop-types';


export default function ColorDisplay({ color }) {
  return (
    <div style={{ backgroundColor: color, height: '75px', width: '75px' }}>{color}</div>
  );
}

ColorDisplay.propTypes = {
  color: PropTypes.string.isRequired
};
