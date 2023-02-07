import React from "react";

class Welcome extends React.Component {
    
    static defaultProps = {
        name: 'Danilo',
      };

    render() {
        return (
            <>
            <p>Welcome, {<strong>{this.props.name}</strong>}</p>
            <p>Your age is {this.props.age}</p>
            </>
        )
    }
}

export default Welcome;