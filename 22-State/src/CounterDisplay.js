import React from "react";

class Counter extends React.Component {

    render() {
      return (
        <h1>
          {this.props.display}
        </h1>
      );
    }
  }

  export default Counter;