import React from 'react';

class TodoItem extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type="checkbox"/>
                <span>{this.props.contents}</span>
            </div>
        )
    }
}

export default TodoItem;