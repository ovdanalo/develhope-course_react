import React from "react";

class ClickCounter extends React.Component {
  state = {
    count: 0
  };

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>increment</button>
      </div>
    );
  }
}

export default ClickCounter;