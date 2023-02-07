import React from "react";
import CounterDisplay from './CounterDisplay';

class Counter extends React.Component {
  state = {
    count: this.props.initialVal
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + this.props.increment
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <CounterDisplay
        display={this.state.count} />
    );
  }
}

export default Counter;