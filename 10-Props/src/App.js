import React from "react";
import Hello from './Hello';
import Welcome from './Welcome';

class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome name='Alessandro' />
            </div>
        )
    }
}

export default App;