import React, {Component} from "react";
import Counter from "./Counter";
import {connect} from "react-redux";

class CounterGroup extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   counterSum: 0,
  //   //   counterArr: new Array(parseInt(this.props.defaultCount)).fill(0)
  //   // };
  // }

  componentWillMount() {
      const count = this.props.defaultCount  || 0;
      this.props.generateCounters(count);
  }

  regenrateCounters = () => {
    this.props.generateCounters(this.refs.countInput.value);
    this.props.clearCounterSum();
  };

  render() {
    return (
      <div>
        <input type="text" ref="countInput" />
        <button onClick={this.regenrateCounters}>
          Regenerate indicated Counters
        </button>
        <br />

        <span>总和：{this.props.counterSum}</span>

        {this.props.counterArr.map(counterItem => (
          <Counter
            key={counterItem.id}
            id={counterItem.id}
            count={counterItem.number}
            onCounterValueChanged={this.props.counterUpdateCallBack}
            onIncreaseAction={this.props.incrementNumber}
            onDecreaseAction={this.props.decrementNumber}
          />
        ))}
      </div>
    );
  }
}

// export default CounterGroup;

const mapStateToProps = (reduxStore)=> ({
  counterSum: reduxStore.counterGroup.counterSum,
  counterArr: reduxStore.counterGroup.counterArr
});

const mapDispatchToProps = (dispatch)=> ({
 incrementNumber: (id)=>
   dispatch({
     type: "INCREMENT_NUMBER",
     payload: id
   }),

 decrementNumber: (id)=>
   dispatch({
     type: "DECREMENT_NUMBER",
     payload: id
   }),

  generateCounters: (generateCount)=>
   dispatch({
     type: "GENERATE_COUNTERS",
     payload: generateCount
   }),

  counterUpdateCallBack : (updateValue) =>
    dispatch({
      type: "COUNTER_SUM",
      payload: updateValue
    }),

  clearCounterSum: () =>
    dispatch({
      type: "CLEAR_SUM"
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterGroup);