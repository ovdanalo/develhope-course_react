import React from "react";
import Container from './Container';
import Login from './Login';

class App extends React.Component {
    render() {
        return (
            <Container>
                <Login/>
            </Container>
        )
    }
}

export default App;