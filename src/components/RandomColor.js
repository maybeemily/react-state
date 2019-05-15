import React, { PureComponent } from 'react';

export default class RandomColor extends PureComponent {
  state = {
    color: '',
    trigger: new Date(),
    img: ''
  };

  randomColor = () => {
    const colorArray = ['olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'navy'];
    const n = Math.floor(Math.random() * colorArray.length);

    return colorArray[n];
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ color: this.randomColor(), trigger: new Date(), img: '' });
    }, 500);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.color === this.state.color) {
      this.setState({ img: 'https://pics.me.me/damn-im-cute-memes-com-13844896.png' });
    }
  }

  componentWillUnmount() {
    this.intervalId && clearInterval(this.intervalId);
  }

  render() {
    const { color, img } = this.state;
    const style = {
      background: img ? `contain url(${img})` : color,
      width: '500px',
      height: '500px'
    };
    return <div style={style}></div>;
  }
}
