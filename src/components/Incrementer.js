import React, { PureComponent } from 'react';

export default class Incrementer extends PureComponent {

  state = {
    number: 1
  };

clickHandler = () => {
  this.setState(state => {
    return {
      number: state.number + 1
    };
  });
}

render() {
  return (
    <>
    <div>Increment: {this.state.number}</div>
    <button onClick={this.clickHandler}>Increment!</button>
    </>
  );
}

}
