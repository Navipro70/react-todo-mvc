import React, { createContext, useContext, FC } from 'react'

import { TodosFilter } from 'src/constants'

import { useTodosState } from './useTodosState'

interface IStore {
  todosStore: ReturnType<typeof useTodosState>
}

const StoreContext = createContext<IStore>({
  todosStore: {
    todos: [],
    todosByFilter: [],
    filter: TodosFilter.All,
    uncompletedCount: 0,
    hasTodos: false,
    hasCompleted: false,
    onAddTodo: () => {},
    onCompleteTodo: () => {},
    onDeleteTodo: () => {},
    onUpdateTodo: () => {},
    onClearCompletedTodos: () => {},
    onSwitchCompleteAllTodos: () => {},
    onSwitchTodosFilter: () => {},
  },
})

export const StoreProvider: FC = ({ children }) => {
  const todosStore = useTodosState()

  return <StoreContext.Provider value={{ todosStore } as IStore}>{children}</StoreContext.Provider>
}

export const useStore = () => {
  const store = useContext(StoreContext)

  if (!store) throw Error("useStore hook can't be called outside StoreProvider")

  return store
}
