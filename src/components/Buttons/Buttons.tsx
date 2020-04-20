import React from "react";
import {Button, ButtonGroup} from "@material-ui/core";
import "../Todo-list-items/Todo.css";

interface propsType {
    completedBut: boolean
    importantBut: boolean
    onCompletedChanger: () => void
    onActiveChanger: () => void
    onAllChanger: () => void
}

export default class Buttons extends React.Component<propsType>{
    render() {
        const styles = {
            backgroundColor: "blue",
            color: "white"
        };
        const {completedBut, importantBut, onCompletedChanger, onActiveChanger, onAllChanger} = this.props;
        return (
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={onAllChanger} style={!completedBut && !importantBut ? styles : {}}>All</Button>
                <Button onClick={onCompletedChanger} style={completedBut && !importantBut ? styles : {}}>Completed</Button>
                <Button onClick={onActiveChanger} style={!completedBut && importantBut ? styles : {}}>Active</Button>
            </ButtonGroup>
        )
    }
};

