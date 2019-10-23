import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component{
    render() {
        const isCompleted = this.props.status === "completed";
        return (
            <div>
                <input type="checkbox" checked={isCompleted? "checked" : ""}/>
                <span className="strikethrough">
                    {this.props.contents}
                </span>
            </div>
        );
    }
}
export default TodoItem;
