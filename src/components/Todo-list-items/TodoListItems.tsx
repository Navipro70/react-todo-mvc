import React from "react";
import TodoItem from "./Todo-item";
import "./Todo.css";

const TodoListItems = (props: any) => {
    return (
        <ul id="list">
            {props.todoArray.map((item: any) => <TodoItem {...item} key={item.id} onDelete={props.onDelete}/>)}
        </ul>
    )
};

export default TodoListItems;