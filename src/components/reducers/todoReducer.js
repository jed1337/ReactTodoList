import React from 'react';

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

            // const newTodoItems = [...state.todoItems];
            // newTodoItems.push({content: action.payload, id: generateId(), status: "active"});
            //
            // return{...state, todoItems: newTodoItems};

            //shorter way
            return {
                ...state,
                todoItems: [...state.todoItems, {content: action.payload, id: generateId(), status: "active"}]
            };

        case "REFRESH_TODO_ITEM_LIST":
            return {...state, todoItems: action.payload};
        case "UPDATE_TODO_ITEM":
            const updatedArr = state.todoItems.map((todoItem) => {
                if (todoItem.id === action.payload.id) {
                    return {...todoItem, status: action.payload.status};
                } else{
                    return todoItem;
                }
            });
            return {...state, todoItems: updatedArr};

        default:
            return state;
    }
}

const generateId = () => {
    return new Date().getTime() + Math.random();
};