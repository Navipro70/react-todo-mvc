import React, {FC} from "react";
import TodoItem from "./Todo-item";
import "./Todo.css";
import { todoArrayType } from "../../App";

type propsType = {
    todoArray: todoArrayType
    completedBut: boolean
    activeBut: boolean
    onImportantHandler: (important: boolean, id: number ) => void
    onCompletedHandler: (completed: boolean, id: number) => void
    onDelete: (id: number) => void
}

const TodoListItems: FC<propsType> = (props) => {
    let showedArray;
    showedArray = props.todoArray
                    .map(item => <TodoItem {...item}
                          onImportantHandler={props.onImportantHandler}
                          onCompletedHandler={props.onCompletedHandler}
                          key={item.id} onDelete={props.onDelete}/>);
    if (props.completedBut) showedArray = showedArray.filter(item => item.props.completed);
    else if (props.activeBut) showedArray = showedArray.filter(item => !item.props.completed);
    return (
        <ul id="list">
            {showedArray}
        </ul>
    )
};

export default TodoListItems;