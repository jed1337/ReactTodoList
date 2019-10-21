import React from 'react'

class TodoList extends React.Component{
    render() {
        return(
            <div>
                <input type="text"/>
                <button>Add todo item</button>
                <div>todo list goes here</div>
            </div>
        )
    }
}

export default TodoList;