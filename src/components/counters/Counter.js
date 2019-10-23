import React, { Component } from "react";

class Counter extends Component {
  increaseNumber = () => {
    this.props.onIncreaseAction(this.props.id);
    this.props.onCounterValueChanged(1);
  };

  decreaseNumber = () => {
    this.props.onDecreaseAction(this.props.id);
    this.props.onCounterValueChanged(-1);
  };

  render() {
    return (
      <div>
        <button onClick={this.increaseNumber}>+</button>
        <span>{this.props.count}</span>
        <button onClick={this.decreaseNumber}>-</button>
      </div>
    );
  }
}

export default Counter;
