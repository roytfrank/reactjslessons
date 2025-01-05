import React from 'react';

class Todos extends React.Component {

    constructor() {
        super();

        this.state = {
            newTodo: '',
            updating: false,
            todos: [
                {
                    id: 1, name: 'First Todo'
                },
                {
                    id: 2, name: 'Second Todo'
                },
                {
                    id: 3, name: 'Third Todo'
                },  
                {
                    id: 5, name: 'Fourth Todo'
                }
            ]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }

    handleChange(event) {
        this.setState({
            newTodo: event.target.value
        })
    }

    handleAddTodo() {
        const newTodo = {
            name: this.state.newTodo,
            id: this.state.todos[this.state.todos.length-1].id + 1
        }

        const todos = this.state.todos;
        todos.push(newTodo);

        this.setState({
            todos: todos,
            newTodo: '',
        });
    }

    deleteTodo(id) {
        const todos = this.state.todos;
        this.setState({todos: todos.filter((item) => item.id !== 1)});
    }

    updateTodo(index) {
        const todo = this.state.todos[1];
        this.setState({
            updating: true,
            newTodo: todo.name
        })
    }

    render() {
        return <div className="container">
            <input 
                type="text" 
                className="form-control my-4" 
                placeholder='add todo' 
                onChange={this.handleChange}
                value={this.state.newTodo}
            />
            <button onClick={this.handleAddTodo} className="btn-info mb-3 form-control">
                Add Todo
            </button>

            <ul className="list-group">
                {this.state.todos.map((item, index) => {
                    return <li 
                            key={index} 
                            className="list-group-item">
                            {item.name}
                    </li>
                })}
            </ul>
        </div>
    }
}

export default Todos;