import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component{
    // constructor(props) {
    //     super(props);
    //     this.state={isCompleted: this.props.isCompleted === "completed"};
    // }

    toggleChange = (event) => {
        // this.setState({
        //     isCompleted: !this.state.isCompleted
        // })
        this.props.updateTodoItem(this.props.id, event.target.checked);
    };

    render() {
        const checkedStatus = this.props.status==="completed"? "checked" : "";
        return (
            <div>
                <input type="checkbox" checked={checkedStatus} onChange={(event)=>this.toggleChange(event)}/>
                <span className="strikethrough">
                    {this.props.contents}
                </span>
            </div>
        );
    }
}
export default TodoItem;
