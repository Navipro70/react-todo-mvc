import React, { useState, useRef, KeyboardEventHandler, ChangeEventHandler } from 'react'

import styles from './TodoInput.module.css'

interface Props {
  hasTodos: boolean
  hasCompleted: boolean
  onAddTodo: (title: string) => void
  onSwitchCompleteAllTodos: () => void
}

export const TodoInput = ({
  hasTodos,
  hasCompleted,
  onAddTodo,
  onSwitchCompleteAllTodos,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [text, setText] = useState('')

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter' && !!text) {
      setText('')
      onAddTodo(text)
      inputRef.current?.blur()
    }
  }

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value)
  }

  return (
    <div className={styles.container}>
      {hasTodos && (
        <input
          type="checkbox"
          value="indigo"
          className={styles.switcher}
          onChange={onSwitchCompleteAllTodos}
          checked={hasCompleted}
        />
      )}
      <input
        ref={inputRef}
        value={text}
        onKeyDown={onKeyDown}
        onChange={onChange}
        className={styles.input}
        placeholder="What's need to be done?"
      />
    </div>
  )
}
