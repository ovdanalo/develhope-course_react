import React from "react";

class Welcome extends React.Component {
    
    static defaultProps = {
        name: 'Danilo',
      };

    render() {
        return (
            <div className='welcome'>
            <p>Welcome, {<strong>{this.props.name}</strong>}</p>
            </div>
        )
    }
}

export default Welcome;