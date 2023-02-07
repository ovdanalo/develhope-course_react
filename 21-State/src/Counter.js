import React from "react";

class Counter extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        count: this.props.initialVal
      };
    }
  
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
        <h1>
          {this.state.count}
        </h1>
      );
    }
  }

  export default Counter;