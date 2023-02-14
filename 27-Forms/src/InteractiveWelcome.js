import React from "react";
import Welcome from './Welcome';

class InteractiveWelcome extends React.Component {

    state = {
        username: ''
    };

    handleChange = (event) => {
        this.setState ({username: event.target.value})
    }

    render() {
        return (
            <div>
                <input type='text' placeholder="your name" onChange={this.handleChange}/>
                <Welcome name={this.state.username}/>
            </div>
        )
    }
}

export default InteractiveWelcome;