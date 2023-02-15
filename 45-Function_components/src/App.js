import React from "react";
import Welcome from './Welcome';
import Sum from './Sum';

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name='Jimmy' />
        <Sum />
      </div>
    )
  }
}

export default App;