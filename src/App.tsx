import React, {useState} from 'react';
import { Container } from '@material-ui/core';
import './App.css';
import Header from "../src/components/Header"
import TodoListItems from "./components/Todo-list-items/TodoListItems";
import Buttons from "./components/Buttons/Buttons";
import CustomInput from "./components/Input";


function App() {
    type itemType = {id: number, task:(string | number)};
    type todoArrayType = Array<itemType>;
    const todoArray: todoArrayType = [
        {id: 1, task: "Learn React"},
        {id: 2, task: "Learn Angular"},
        {id: 3, task: "Learn TypeScript"}
    ];
    const [todoState, setTodoState] = useState(todoArray);
    const onDelete = (id: number) => {
        setTodoState((todoState) => todoState.filter(item => item.id !== id))
    };
    const addTask = (task: (string | number)) => {
        setTodoState(todoState => [{id: Math.random(),task}, ...todoState])
    };
    return (
        <Container maxWidth="xs">
            <Header/>
            <Buttons />
            <CustomInput addTask={addTask} />
            <TodoListItems todoArray={todoState} onDelete={onDelete}/>
        </Container>
    );
}

export default App;
