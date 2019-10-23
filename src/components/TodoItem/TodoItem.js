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
        // console.log("event target checked ", event.target.checked);
        const status = event.target.checked ? "completed" : "active";
        // console.log("todo item id ", this.props.id);
        // console.log("Status ", status);
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
