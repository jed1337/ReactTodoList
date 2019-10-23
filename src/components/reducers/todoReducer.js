import React from 'react';

const initialState = {
    todoItems: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO_ITEM":
            // const newTodoItems = state.todoItems;
            // newTodoItems.push({text: action.payload, id: generateId()});

            return {
                ...state,
                todoItems: [...state.todoItems, {text: action.payload, id: generateId()}]
            };
            // return{...state, todoItems: newTodoItems};

        default:
            return state;
    }
}

const generateId = () => {
    return new Date().getTime() + Math.random();
};