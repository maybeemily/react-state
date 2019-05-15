import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ColorPicker extends PureComponent {
  static propTypes = {
    colors: PropTypes.array.isRequired
  };


  render() {
    const buttons = this.props.colors.map(color => {
      return (
        <button key={color} style={{ background: color, height: '75px', width: '75px' }}>{color}</button>
      );
    });
    return (
      <>
      { buttons }
      </>
    );
  }

}

//color lives in app, the parent of both picker and display. state lives in the app, along with update color
//pass function as a prop to color picker
//data flow tomorrow will show this more
