import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component{
    toggleChange = (event) => {
        const status = event.target.checked ? "completed" : "active";
        this.props.updateTodoItem(this.props.id, status);
    };

    render() {
        const isCompleted = this.props.status === 'completed' ;
        return (
            <div>
                <input type="checkbox" checked={isCompleted} onChange={(event)=>this.toggleChange(event)}/>
                <span className="strikethrough">
                    {this.props.contents}
                </span>
            </div>
        );
    }
}
export default TodoItem;
