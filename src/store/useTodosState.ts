import { useCallback, useState } from 'react'

import { StorageKeys, TodosFilter } from 'src/constants'

export interface ITodo {
  id: number
  title: string
  isCompleted: boolean
}

const storedTodods = localStorage.getItem(StorageKeys.todos)
const todosFilter = localStorage.getItem(StorageKeys.todosFilter)

export const useTodosState = () => {
  const [todos, setTodos] = useState<ITodo[]>(storedTodods ? JSON.parse(storedTodods) : [])
  const [filter, setFilter] = useState(todosFilter ? JSON.parse(todosFilter) : TodosFilter.All)

  const hasCompleted = !!todos.filter(({ isCompleted }) => isCompleted).length
  const hasTodos = !!todos.length
  const uncompletedCount = todos.filter(({ isCompleted }) => !isCompleted).length

  const getTodosByFilter = () => {
    switch (filter) {
      case TodosFilter.All:
        return todos
      case TodosFilter.Active:
        return todos.filter(({ isCompleted }) => isCompleted)
      case TodosFilter.Completed:
        return todos.filter(({ isCompleted }) => !isCompleted)
      default:
        return todos
    }
  }

  const onSwitchTodosFilter = useCallback((newFilter: TodosFilter) => {
    setFilter(newFilter)
  }, [])

  const applyNewTodos = useCallback((newTodos: ITodo[]) => {
    setTodos(newTodos)
    localStorage.setItem(StorageKeys.todos, JSON.stringify(newTodos))
  }, [])

  const onDeleteTodo = useCallback(
    (id: number) => {
      applyNewTodos(todos.filter((item) => item.id !== id))
    },
    [applyNewTodos, todos],
  )

  const onAddTodo = useCallback(
    (title: string) => {
      applyNewTodos([...todos, { id: Date.now(), title, isCompleted: false }])
    },
    [applyNewTodos, todos],
  )

  const onCompleteTodo = useCallback(
    (id: number) => {
      const newTodos = todos.map((item) =>
        item.id === id
          ? {
              ...item,
              isCompleted: !item.isCompleted,
            }
          : item,
      )
      applyNewTodos(newTodos)
    },
    [applyNewTodos, todos],
  )

  const onUpdateTodo = useCallback(
    (id: number, title: string) => {
      const newTodos = todos.map((item) =>
        item.id === id
          ? {
              ...item,
              title,
            }
          : item,
      )
      applyNewTodos(newTodos)
    },
    [applyNewTodos, todos],
  )

  const onSwitchCompleteAllTodos = useCallback(() => {
    const newTodos = todos.map((item) => ({
      ...item,
      isCompleted: !hasCompleted,
    }))
    applyNewTodos(newTodos)
  }, [applyNewTodos, hasCompleted, todos])

  const onClearCompletedTodos = useCallback(() => {
    applyNewTodos(todos.filter(({ isCompleted }) => !isCompleted))
  }, [applyNewTodos, todos])

  return {
    todos,
    todosByFilter: getTodosByFilter(),
    filter,
    uncompletedCount,
    hasTodos,
    hasCompleted,
    onAddTodo,
    onDeleteTodo,
    onCompleteTodo,
    onUpdateTodo,
    onSwitchCompleteAllTodos,
    onClearCompletedTodos,
    onSwitchTodosFilter,
  }
}
