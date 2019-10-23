import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component{
    render() {
        return (
            <div>
                <input type="checkbox"/>
                <span className="strikethrough">
                    {this.props.contents}
                </span>
            </div>
        );
    }
}
export default TodoItem;
