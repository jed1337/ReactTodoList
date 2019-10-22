import React from 'react'
import TodoItem from "../TodoItem/TodoItem";
import './TodoList.css';
import doge from './doge.png';
import logo from "../../logo.svg";

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
        if(!this.state.inputText){
            return;
        }
        this.setState({inputText: ""});

        let updatedTodoItems = this.state.todoItems;
        updatedTodoItems.push(<TodoItem contents={this.state.inputText}/>);

        this.setState({todoItems: updatedTodoItems});
    };

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <img src={doge} className="App-logo" alt="DOGE" />

                <div className="todoItems">
                    <input type="text" onChange={this.updateInputText} value={this.state.inputText}/>
                    <button onClick={this.createTodoListItem}>Add todo item</button>
                    <div>{this.state.todoItems}</div>
                </div>
            </div>
        )
    }
}

export default TodoList;