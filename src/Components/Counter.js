import React, { Component } from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incremetnNumber() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrimentNumber() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  resetCounter() {
    this.setState({
      count: 0,
    });
  }

  // change code above this line
  render() {
    return (
      <div>
       {this.state.count >= 0 ? 
        <h4 className="text-success">{this.state.count}</h4> :
        <h4 className="text-danger">{this.state.count}</h4>
       }
        <button
          className="btn btn-success mr-3"
          onClick={() => this.incremetnNumber()}
        >
          add!
        </button>
        <button
          className="btn btn-warning mr-3"
          onClick={() => this.decrimentNumber()}
        >
          minus!
        </button>
        <button className="btn btn-danger" onClick={() => this.resetCounter()}>
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
