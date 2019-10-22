import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component{
    randomClasses() {
        const fontSizeClasses=["small", "medium", "large"];
        const randomFont = fontSizeClasses[Math.floor(Math.random()*3)];

        const fontColours=["pink", "yellow", "green"];
        const randomColour = fontColours[Math.floor(Math.random()*3)];

        return `strikethrough ${randomFont} ${randomColour}`;
    }
    render() {
        return (
            <div>
                <input type="checkbox"/>
                <span className={this.randomClasses()}>
                    {this.props.contents}
                </span>
            </div>
        );
    }
}
export default TodoItem;
