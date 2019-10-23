import React from 'react';
import './TodoItem.css';
import 'antd/dist/antd.css';
import Checkbox from "antd/lib/checkbox";

class TodoItem extends React.Component{
    toggleChange = (event) => {
        const status = event.target.checked ? "completed" : "active";
        this.props.updateTodoItem(this.props.id, status);
    };

    render() {
        const isCompleted = this.props.status === 'completed' ;
        return (
            <div>
                <Checkbox type="checkbox" checked={isCompleted} onChange={(event)=>this.toggleChange(event)}>
                    {this.props.contents}
                </Checkbox>

                {/*<span className="strikethrough">*/}
                {/*</span>*/}
            </div>
        );
    }
}
export default TodoItem;
