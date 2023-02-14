import React from "react";

class TodoList extends React.Component {
    state = {
        todo: [
            'Eat',
            'Code',
            'Sleep'
        ],
        value: ''
    }


    handleSubmit = (event) => {
        event.preventDefault()
        this.setState(
            (prevState) => ({
                todo: [...prevState.todo, prevState.value],
                value: ''
            })
        );
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder="todo" value={this.state.value} onChange={this.handleChange} />
                    <button type='submit'>submit</button>
                </form>
                <ul>
                    {this.state.todo.map((todo, index) => { return (<li key={index} style={{listStyle:'none'}}>{todo}</li>) })}
                </ul>
            </div>
        )
    }
}

export default TodoList;