import React from "react";
import Age from './Age';

class Welcome extends React.Component {
    
    static defaultProps = {
        name: 'Danilo',
      };

    render() {
        return (
            <>
            <p>Welcome, {<strong>{this.props.name}</strong>}</p>
            <Age age={this.props.age}/>
            </>
        )
    }
}

export default Welcome;