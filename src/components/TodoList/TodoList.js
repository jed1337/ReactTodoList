import React from 'react'

class TodoList extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            inputText: "",
            todoItems:[]
        }
    }

    updateInputText = (e) => {
        this.setState({inputText: e.target.value})
    };

    render() {
        return(
            <div>
                <input type="text" onChange={this.updateInputText}/>
                <button>Add todo item</button>
                <div>{this.state.inputText}</div>
            </div>
        )
    }
}

export default TodoList;