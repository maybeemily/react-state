import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ColorPicker extends PureComponent {
  static propTypes = {
    colors: PropTypes.array.isRequired
  };

  state = {
    divBackground: 'grey'
  };

  clickHandler = color => {
    this.setState({ divBackground: color }, () => {
      console.log(color);
    });
  };

  render() {
    const buttons = this.props.colors.map(color => {
      return (
        <button key={color} style={{ background: color, height: '100px', width: '100px' }} onClick={this.clickHandler.bind(null, color)}>{color}</button> //or onClick = {()=>this.clickHandler(color)}
      );
    });

    const backgroundColor = this.state.divBackground;

    return (
      <>
      { buttons }
      <div style={{ background: backgroundColor, height: '100px', width: '100px' }}>your chosen color</div>
      </>
    );
  }
}
