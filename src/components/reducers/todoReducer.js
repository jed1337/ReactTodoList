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

            const newTodoItems = [...state.todoItems];
            newTodoItems.push({text: action.payload, id: generateId()});

            return{...state, todoItems: newTodoItems};

            //shorter way
                // return {
                //     ...state,
                //     todoItems: [...state.todoItems, {text: action.payload, id: generateId()}]
                // };

        default:
            return state;
    }
}

const generateId = () => {
    return new Date().getTime() + Math.random();
};