import React from 'react'

import { useStore } from 'src/store'

import styles from './TodosPage.module.css'
import { Menu, TodoInput, TodoItem } from './components'

export const TodosPage = () => {
  const {
    todosStore: {
      todos,
      todosByFilter,
      filter,
      uncompletedCount,
      hasTodos,
      hasCompleted,
      onAddTodo,
      onSwitchCompleteAllTodos,
      onDeleteTodo,
      onCompleteTodo,
      onUpdateTodo,
      onClearCompletedTodos,
      onSwitchTodosFilter,
    },
  } = useStore()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todos</h1>
      <div className={styles.todosWrapper}>
        <TodoInput
          hasTodos={!!todos.length}
          hasCompleted={hasCompleted}
          onAddTodo={onAddTodo}
          onSwitchCompleteAllTodos={onSwitchCompleteAllTodos}
        />

        {todosByFilter.map((item) => (
          <TodoItem
            {...item}
            key={item.id.toString()}
            onDeleteTodo={onDeleteTodo}
            onCompleteTodo={onCompleteTodo}
            onUpdateTodo={onUpdateTodo}
          />
        ))}

        {hasTodos && (
          <Menu
            filter={filter}
            uncompletedCount={uncompletedCount}
            hasCompleted={hasCompleted}
            onClearAll={onClearCompletedTodos}
            onSwitchTodosFilter={onSwitchTodosFilter}
          />
        )}
      </div>

      <div className={styles.footer}>
        Reference of{' '}
        <a className={styles.link} href="https://todomvc.com/">
          TodoMVC
        </a>
      </div>
    </div>
  )
}
