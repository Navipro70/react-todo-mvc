import React, {useState} from "react";
import {TextField, Button} from "@material-ui/core";
import "./CommonStyles.css";

type propsType = { addTask: (task: (string | number)) => void }

const CustomInput = (props: propsType) => {
    const [inputValue, setInputValue] = useState("");
    const addTaskHandler = () => {
        props.addTask(inputValue);
        setInputValue("")
    };
    return (
        <div className="customInput">
            <TextField value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                       id="outlined-basic" label="Outlined" variant="outlined"/>
            <Button variant="contained" color="primary" onClick={addTaskHandler}>
                Add task
            </Button>
        </div>
    )
};


export default CustomInput;