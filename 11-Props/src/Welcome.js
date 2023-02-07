import React from "react";

class Welcome extends React.Component {
    
    static defaultProps = {
        name: 'Danilo',
      };

    render() {
        return (
            <p>Welcome, {this.props.name}</p>
        )
    }
}

export default Welcome;