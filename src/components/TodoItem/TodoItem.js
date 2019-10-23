import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component{
    constructor(props) {
        super(props);
        this.state={isCompleted: this.props.isCompleted === "completed"};
    }

    toggleChange = () => {
        this.setState({
            isCompleted: !this.state.isCompleted
        })
    };

    render() {
        return (
            <div>
                <input type="checkbox" checked={this.state.isCompleted? "checked" : ""} onChange={this.toggleChange}/>
                <span className="strikethrough">
                    {this.props.contents}
                </span>
            </div>
        );
    }
}
export default TodoItem;
