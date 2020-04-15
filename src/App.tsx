import React from 'react';
import { Container } from '@material-ui/core';
import './App.css';
import Header from "../src/components/Header"
import TodoListItems from "./components/Todo-list-items/TodoListItems";
import Buttons from "./components/Buttons/Buttons";


function App() {
    type itemType = {id: number, task:(string | number)};
    type todoArrayType = Array<itemType>;
    const todoArray: todoArrayType = [
        {id: 1, task: "Learn React"},
        {id: 2, task: "Learn Angular"},
        {id: 3, task: "Learn TypeScript"}
    ];
    return (
        <Container maxWidth="xs">
            <Header/>
            <Buttons />
            <TodoListItems todoArray={todoArray} />
        </Container>
    );
}

export default App;
