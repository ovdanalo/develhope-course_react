import React from "react";
import Hello from './Hello';
import Welcome from './Welcome';

class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name={<strong>Alessandro</strong>} age={30} />
            </div>
        )
    }
}

export default App;