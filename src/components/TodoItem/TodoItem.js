import React from 'react';

class TodoItem extends React.Component{
    render() {
        return (
            <div>
                <input type="checkbox"/>
                <span>Default item</span>
            </div>
        )
    }
}

export default TodoItem;