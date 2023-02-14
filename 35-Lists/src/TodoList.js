import React from "react";

class TodoList extends React.Component {
    state = {
        todo: [
            {id: Date.now() - 3, value: 'Eat'},
            {id: Date.now() - 2, value: 'Code'},
            {id: Date.now() - 1, value: 'Sleep'},
        ],
        value: ''
    }


    handleSubmit = (event) => {
        event.preventDefault()
        this.setState(
            (prevState) => ({
                todo: [...prevState.todo, { id: Date.now(), value: prevState.value }],
                value: ''
            })
        );
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }

    handleReset = () => {
        this.setState({ todo: [], value: '' })
    }

    handleRemove = (id) => {
        this.setState(prevState => ({
            todo: prevState.todo.filter(todo => todo.id !== id)
        }));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder="todo" value={this.state.value} onChange={this.handleChange} />
                    <button type='submit'>submit</button>
                    <button onClick={this.handleReset}>reset</button>
                </form>
                <ul>
                    {this.state.todo.map((todo) => {
                        return (
                            <li key={todo.id}>
                                {todo.value}
                                <button onClick={() => this.handleRemove(todo.id)}>remove</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

export default TodoList;