import React from "react";
import "./Todo.css"
import {Button} from "@material-ui/core";

interface propType {
    id: number
    task: string
    onDelete: (id: number) => void
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

    onTaskClickHandler = () => this.setState(state => ({done: !state.done}))
    onImportantHandler = () => this.setState(state => ({important: !state.important}))

    render() {
        return (
            <>
                <li className={`item-list
                ${this.state.done ? "completed" : null} 
                ${this.state.important ? "important" : null}`}
                    onClick={this.onTaskClickHandler}>
                    {this.props.task}
                </li>
                <Button onClick={() => this.props.onDelete(this.props.id)}>-</Button>
                <Button onClick={this.onImportantHandler}>!</Button>
            </>
        )
    }
};