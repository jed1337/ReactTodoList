import React from 'react';
import './TodoItem.css';

function TodoItem (props) {
    return (
        <div>
            <input type="checkbox"/>
            <span className="strikethrough">{props.contents}</span>
        </div>
    )
}
export default TodoItem;
