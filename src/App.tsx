import React, { FC, useState } from 'react'
import { Container } from '@material-ui/core'
import './App.css'
import Header from '../src/components/Header'
import TodoListItems from './components/Todo-list-items/TodoListItems'
import Buttons from './components/Buttons/Buttons'
import CustomInput from './components/Input'
import Statistic from './components/Statistic'

type itemType = { id: number; task: string; completed: boolean; important: boolean }
export type todoArrayType = Array<itemType>

const App: FC = () => {
  const todoArray: todoArrayType = [
    { id: 1, task: 'Learn React', completed: false, important: false },
    { id: 2, task: 'Learn Angular', completed: false, important: false },
    { id: 3, task: 'Learn TypeScript', completed: false, important: false },
  ]

  const [todoState, setTodoState] = useState<todoArrayType>(todoArray)

  const onDelete = (id: number): void => {
    setTodoState((todoState) =>
      todoState.filter((item) => {
        if (item.id === id && item.completed) setFinishedCount((finishedCount) => finishedCount - 1)
        else if (item.id === id && !item.completed) setActiveCount((activeCount) => activeCount - 1)
        return item.id !== id
      }),
    )
  }

  const addTask = (task: string): void => {
    setTodoState((todoState) => [
      { id: Math.random(), task, completed: false, important: false },
      ...todoState,
    ])
    setActiveCount((activeCount) => activeCount + 1)
  }

  const onCompletedHandler = (completed: boolean, id: number): void => {
    setTodoState((todoState) =>
      todoState.map((item) => {
        if (item.id === id) item.completed = !completed
        if (item.completed && item.id === id) {
          setFinishedCount((finishedCount) => finishedCount + 1)
          setActiveCount((activeCount) => activeCount - 1)
        } else if (item.id === id) {
          setFinishedCount((finishedCount) => finishedCount - 1)
          setActiveCount((activeCount) => activeCount + 1)
        }
        return item
      }),
    )
  }

  const onImportantHandler = (important: boolean, id: number): void => {
    setTodoState((todoState) =>
      todoState.map((item) => {
        if (item.id === id) item.important = !important
        return item
      }),
    )
  }

  const [completedBut, setCompletedBut] = useState<boolean>(false)
  const [activeBut, setActiveBut] = useState<boolean>(false)
  const onCompletedChanger = (): void => {
    setActiveBut(false)
    setCompletedBut(true)
  }
  const onActiveChanger = (): void => {
    setActiveBut(true)
    setCompletedBut(false)
  }
  const onAllChanger = (): void => {
    setActiveBut(false)
    setCompletedBut(false)
  }

  const [activeCount, setActiveCount] = useState<number>(
    todoState.filter((item) => !item.completed).length,
  )
  const [finishedCount, setFinishedCount] = useState<number>(
    todoState.filter((item) => item.completed).length,
  )

  return (
    <Container maxWidth="xs">
      <Header />
      <Buttons
        importantBut={activeBut}
        completedBut={completedBut}
        onCompletedChanger={onCompletedChanger}
        onActiveChanger={onActiveChanger}
        onAllChanger={onAllChanger}
      />
      <Statistic activeCount={activeCount} finishedCount={finishedCount} />
      <CustomInput addTask={addTask} />
      <TodoListItems
        todoArray={todoState}
        onImportantHandler={onImportantHandler}
        onDelete={onDelete}
        onCompletedHandler={onCompletedHandler}
        activeBut={activeBut}
        completedBut={completedBut}
      />
    </Container>
  )
}

export default App
