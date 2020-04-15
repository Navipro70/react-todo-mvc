import React from "react";
import {Button, ButtonGroup} from "@material-ui/core";

export default class Buttons extends React.Component{
    render() {
        const styles = {backgroundColor: "blue", color: "white"};
        return (
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button>All</Button>
                <Button>Completed</Button>
                <Button>Active</Button>
            </ButtonGroup>
        )
    }
};

