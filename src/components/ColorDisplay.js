import React from 'react';
import PropTypes from 'prop-types';


export default function ColorDisplay({ color }) {
  return (
    <div style={{ backgroundColor: color }}>{color}</div>
  );
}

ColorDisplay.propTypes = {
  color: PropTypes.string.isRequired
};
