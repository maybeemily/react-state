import React from 'react';
import PropTypes from 'prop-types';

function ColorPicker({ colorArray, selectColor }) {

  const buttons = colorArray.map(color => {
    return (
      <button key={color} style={{ background: color, height: '75px', width: '75px' }} onClick={selectColor.bind(null, color)}> {color}</button>
    );
  });

  return (
      <>
      { buttons }
      </>
  );
}

ColorPicker.propTypes = {
  colorArray: PropTypes.array.isRequired,
  selectColor: PropTypes.func.isRequired
};

export default ColorPicker;

