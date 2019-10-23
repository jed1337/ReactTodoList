import React from 'react'
import {connect} from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import todoApi from "../api/todoApi";
import 'antd/dist/antd.css';
import Title from "antd/es/typography/Title";
import Button from "antd/lib/button";
import Input from "antd/lib/input";

class FetchTodoFromApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: "",
            filter: showAllItems
        }
    }

    componentDidMount() {
        todoApi.getAll()
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.props.refreshTodoItemList(res._embedded.todos);
            });
    }

    generateTodoItem = () => {
        this.props.addTodoItem(this.state.inputText);
    };

    render() {
        return (
            <div>
                <Title>Todo List</Title>

                <div className="todoItems">
                    <Input type="text"
                           value={this.state.inputText}
                           onChange={e => this.setState({inputText: e.target.value})}
                    />
                    <Button type="primary" onClick={this.generateTodoItem}>Add todo item</Button>

                    <div>
                        <Button onClick={()=>{this.setState({filter: showAllItems})}}>Show all items</Button>
                        <Button onClick={()=>{this.setState({filter: filterActiveTodoItems})}}>Only show active items</Button>
                        <Button onClick={()=>{this.setState({filter: filterCompletedTodoItems})}}>Only show completed items</Button>
                    </div>

                    <div>
                        {
                            this.state.filter(this.props.todoItems)
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

const showAllItems = (todoItems) => {
    return todoItems
};

const filterActiveTodoItems = (todoItems) => {
    return todoItems
        .filter(todoItem=>todoItem.status==="active");
};

const filterCompletedTodoItems = (todoItems) => {
    return todoItems
        .filter(todoItem=>todoItem.status==="completed");
};

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