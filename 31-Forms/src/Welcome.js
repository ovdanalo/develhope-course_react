import React from "react";

class Welcome extends React.Component {
    
    static defaultProps = {
        name: 'Danilo',
      };

    render() {
        return (
            <>
            <p>Welcome, {<strong>{this.props.name}</strong>}</p>
            </>
        )
    }
}

export default Welcome;