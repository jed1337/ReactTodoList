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
                                        updateTodoItem={this.props.updateTodoItem}
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
    // addTodoItem: (inputText) =>
    //     dispatch({
    //         type: "ADD_TODO_ITEM",
    //         payload: inputText
    //     }),
    addTodoItem: inputText => {
        const newTodoItem = {
            content: inputText,
            status: "active"
        };

        fetch("http://localhost:8080/api/todos", {
            mode: 'cors',
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(newTodoItem)
        })
            .then(res => res.json())
            .then(({id, status, content}) => {
                dispatch({
                    type: "ADD_TODO_ITEM",
                    payload: content
                })
            })
    },
    refreshTodoItemList: (todoList) =>
        dispatch({
            type: "REFRESH_TODO_ITEM_LIST",
            payload: todoList
        }),
    updateTodoItem: (id, status) =>
        dispatch({
            type: "UPDATE_TODO_ITEM",
            payload: {id, status}
        })
});

// export default TodoList;
export default connect(mapStateToProps, mapDispatchToProps)(FetchTodoFromApi);