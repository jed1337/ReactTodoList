import React from 'react';
import TodoItem from "../TodoItem/TodoItem";

const initialState = {
    todoItems: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO_ITEM":
            //const newTodoItems = state.todoItems; newTodoItems refers to the state.todoItems.
            //we shouldn't update the same item according to react
            //
            //const newTodoItems = [...state.todoItems]; creates a new array from state.todoItems

            const newTodoItems = [...state.todoItems];
            newTodoItems.push({content: action.payload, id: generateId()});

            return{...state, todoItems: newTodoItems};

            //shorter way
                // return {
                //     ...state,
                //     todoItems: [...state.todoItems, {text: action.payload, id: generateId()}]
                // };
        case "REFRESH_TODO_ITEM_LIST":
            return {...state, todoItems: action.payload};
        default:
            return state;
    }
}

const generateId = () => {
    return new Date().getTime() + Math.random();
};