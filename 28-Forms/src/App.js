import React from "react";
import InteractiveWelcome from './InteractiveWelcome';
import Login from "./Login";

class App extends React.Component {
    state = {
        username: '',
        password: '',
        check: false
    }

    handleChildState = (childState) => {
        this.setState({
            ...childState
          }, () => {console.log(this.state)});
          
    }

    render() {
        return (
            <div>
                <InteractiveWelcome />
                <Login onLogin={this.handleChildState}/>
            </div>
        )
    }
}

export default App;