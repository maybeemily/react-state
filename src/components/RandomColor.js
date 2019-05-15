import React, { PureComponent } from 'react';

export default class RandomColor extends PureComponent {
  state = {
    color: '',
    trigger: new Date(),
  };

  randomColor = () => {
    const colorArray = ['olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'navy'];
    const n = Math.floor(Math.random() * colorArray.length);

    return colorArray[n];
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ color: this.randomColor(), trigger: new Date() });
    }, 500);
  }

  componentWillUnmount() {
    this.intervalId && clearInterval(this.intervalId);
  }

  render() {
    const { color } = this.state;
    const style = {
      background: color,
      width: '500px',
      height: '500px'
    };
    return <div style={style}></div>;
  }
}
