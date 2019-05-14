import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ColorPicker extends PureComponent {
  static propTypes = {
    colors: PropTypes.array.isRequired
  };

  state = {
    divBackground: 'white'
  }

  clickHandler = () => {
    this.setState = { divBackground: this.state.color };
  };

  

  render() {
    const buttons = colors.map(color => {
      return (
        <button key={color} style={{ backgroundColor: color, height: '100px', width: '100px' }} onClick={clickHandler}>{color}</button>
      );
    });
    return (
      <>
      { buttons }
      <div></div>
      </>
    );
  }
  
}
