import React from "react";
import "./Todo.css"
import {Button} from "@material-ui/core";

interface propType {
    id: number
    task: string
}

interface stateType {
    done: boolean
    important: boolean
}

export default class TodoItem extends React.Component<propType, stateType> {
    constructor(props: propType) {
        super(props);
        this.state = {
            done: false,
            important: false
        };
    }

    onTaskClickHandler = () => this.setState({done: !this.state.done});
    onImportantHandler = () => this.setState({important: !this.state.important});

    render() {
        return (
            <>
                <li className={`item-list
                ${this.state.done ? "completed" : null} 
                ${this.state.important ? "important" : null}`}
                    onClick={this.onTaskClickHandler}>
                    {this.props.task}
                </li>
                <Button>-</Button>
                <Button onClick={this.onImportantHandler}>!</Button>
            </>
        )
    }
};