import React from 'react'
import {connect} from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

class FetchTodoFromApi extends React.Component {
    componentDidMount() {
        fetch("http://localhost:8080/api/todos", {mode: 'cors'})
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.props.refreshTodoItemList(res._embedded.todos);
            });
    }

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
                                    <TodoItem
                                        contents={todoItem.content}
                                        key={todoItem.id}
                                        id={todoItem.id}
                                        status={todoItem.status}
                                    />
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
    refreshTodoItemList: (todoList) =>
        dispatch({
            type: "REFRESH_TODO_ITEM_LIST",
            payload: todoList
        })
});

// export default TodoList;
export default connect(mapStateToProps, mapDispatchToProps)(FetchTodoFromApi);