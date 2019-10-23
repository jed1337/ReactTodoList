import React from 'react'
import {connect} from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import todoApi from "../api/todoApi";

class FetchTodoFromApi extends React.Component {
    componentDidMount() {
        todoApi.getAll()
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.props.refreshTodoItemList(res._embedded.todos);
            });
    }

    generateTodoItem = () => {
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
                                        updateTodoItem={this.props.patchTodo}
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
    addTodoItem: inputText => {
        const newTodoItem = {
            content: inputText,
            status: "active"
        };

        todoApi.addNewTodoItem(newTodoItem)
            .then(res => res.json())
            .then(({id, status, content}) => {
                dispatch({
                    type: "ADD_TODO_ITEM",
                    payload: {id, status, content}
                })
            })
    },

    patchTodo: (id, status) => {
        todoApi.patchExistingTodoItem(id, status)
            .then(res => res.json())
            .then(({id, status, content}) => {
                dispatch({
                    type: "UPDATE_TODO_ITEM",
                    payload: {id, status, content}
                })
            })
    },

    refreshTodoItemList: (todoList) =>
        dispatch({
            type: "REFRESH_TODO_ITEM_LIST",
            payload: todoList
        })
});

// export default TodoList;
export default connect(mapStateToProps, mapDispatchToProps)(FetchTodoFromApi);