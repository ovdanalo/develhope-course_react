import React from "react";
import Counter from './Counter';

class App extends React.Component {
    render() {
        return (
            <div>
                <Counter
                    initialVal={5}
                    increment={3} />
            </div>
        )
    }
}

export default App;