import React from "react";

class ClickTracker extends React.Component {
  state = {
    lastButton: ''
  };

  clickTracker = (event) => {
    this.setState({
      lastButton: event.target.innerHTML
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.clickTracker}>Button 1</button>
        <button onClick={this.clickTracker}>Button 2</button>
        <button onClick={this.clickTracker}>Button 3</button>
        <h1>{this.state.lastButton}</h1>
      </div>
    );
  }
}

export default ClickTracker;