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

//color lives in app, the parent of both picker and display. state lives in the app, along with update color
//pass function as a prop to color picker
//data flow tomorrow will show this more
