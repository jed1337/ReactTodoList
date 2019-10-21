import React from 'react'
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: "",
            todoItems: []
        }
    }

    updateInputText = (e) => {
        this.setState({inputText: e.target.value})
    };

    createTodoListItem = () => {
        let updatedTodoItems = this.state.todoItems;
        updatedTodoItems.push(<TodoItem contents={this.state.inputText}/>);

        this.setState({todoItems: updatedTodoItems});
    };

    render() {
        return (
            <div>
                <h1>Todo List</h1>

                <div className="todoItems">
                    <input type="text" onChange={this.updateInputText}/>
                    <button onClick={this.createTodoListItem}>Add todo item</button>
                    <div>{this.state.todoItems}</div>
                </div>
            </div>
        )
    }
}

export default TodoList;