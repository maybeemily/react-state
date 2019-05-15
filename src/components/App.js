import React, { PureComponent } from 'react';
import ColorPicker from './ColorPicker';
import ColorDisplay from './ColorDisplay';

export default class App extends PureComponent {
  state = {
    color: ''
  }
  

  selectColor = color => {
    this.setState({ color });
  }

  render() {
    const colorArray = ['red', 'blue', 'yellow'];
    return (
        <>
        <ColorPicker colors = { colorArray } />
        <ColorDisplay color = { color } />
        </>
    );
  }



}
