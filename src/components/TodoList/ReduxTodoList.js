import React from 'react'
import {connect} from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

class ReduxTodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {inputText: ""};
    }

    updateInputText = (e) => {
        this.setState({inputText: e.target.value});
    };

    generateTodoItem = () => {
        // console.log(this.state);
        // this.props.addTodoItem(this.state.inputText);
        console.log(this.refs.inputText.value);
        this.props.addTodoItem(this.refs.inputText.value);
    };

    render() {
        return (
            <div>
                <h1>Todo List</h1>

                <div className="todoItems">
                    {/*<input type="text" onChange={this.updateInputText}/>*/}
                    <input type="text" ref="inputText"/>
                    <button onClick={this.generateTodoItem}>Add todo item</button>
                    <div>
                        {
                            this.props.todoItems
                                .map(todoItem => (
                                    <TodoItem contents={todoItem.text} key={todoItem.id} id={todoItem.id}/>
                                ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    todoItems: reduxStore.todoReducer.todoItems
});

const mapDispatchToProps = (dispatch) => ({
    addTodoItem: (inputText) =>
        dispatch({
            type: "ADD_TODO_ITEM",
            payload: inputText
        }),
});

// export default TodoList;
export default connect(mapStateToProps, mapDispatchToProps)(ReduxTodoList);