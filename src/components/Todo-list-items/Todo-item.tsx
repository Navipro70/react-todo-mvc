import React from "react";
import "./Todo.css"
import {Button} from "@material-ui/core";

interface propType {
    id: number
    task: (string | number)
    completed: boolean
    important: boolean
    onDelete: (id: number) => void
    onCompletedHandler: (completed: boolean, id: number) => void
    onImportantHandler: (important: boolean, id: number) => void
}

export default class TodoItem extends React.Component<propType> {
    render() {
        const {completed, important, id, task, onCompletedHandler, onImportantHandler, onDelete} = this.props;
        return (
            <>
                <li className={`item-list
                ${completed ? "completed" : null} 
                ${important ? "important" : null}`}
                    onClick={() => onCompletedHandler(completed, id)}>
                    {task}
                </li>
                <Button onClick={() => onDelete(id)}>-</Button>
                <Button onClick={() => onImportantHandler(important, id)}>!</Button>
            </>
        )
    }
};