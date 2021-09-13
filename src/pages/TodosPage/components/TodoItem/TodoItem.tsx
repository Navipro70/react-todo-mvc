import React, { ChangeEventHandler, useCallback, useEffect, useRef, useState } from 'react'

import { Icons } from 'src/assets'
import { ITodo } from 'src/store/useTodosState'

import styles from './TodoItem.module.css'

interface Props extends ITodo {
  onDeleteTodo: (id: number) => void
  onCompleteTodo: (id: number) => void
  onUpdateTodo: (id: number, title: string) => void
}

export const TodoItem = ({
  id,
  title,
  isCompleted,
  onDeleteTodo,
  onCompleteTodo,
  onUpdateTodo,
}: Props) => {
  const node = useRef<HTMLInputElement>(null)
  const [newTitle, setNewTitle] = useState('')
  const [isHover, setIsHover] = useState(false)

  const onDelete = () => onDeleteTodo(id)
  const onComplete = () => onCompleteTodo(id)
  const onMouseEnter = () => setIsHover(true)
  const onMouseLeave = () => setIsHover(false)

  const onStartEditing = () => {
    setNewTitle(title)
  }

  const onEndEditing = useCallback(
    (e) => {
      if (node.current?.contains(e.target)) {
        return
      }
      if (!!newTitle) {
        onUpdateTodo(id, newTitle)
      }
      setNewTitle('')
    },
    [id, newTitle, onUpdateTodo],
  )

  const onNewTitleChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setNewTitle(event.target.value)

  useEffect(() => {
    window.addEventListener('mousedown', onEndEditing)
    return () => window.removeEventListener('mousedown', onEndEditing)
  }, [onEndEditing])

  return (
    <div
      className={styles.container}
      onMouseOver={onMouseEnter}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onDoubleClick={onStartEditing}
    >
      <input
        type="checkbox"
        value="indigo"
        className={styles.checkbox}
        onChange={onComplete}
        checked={isCompleted}
      />

      {newTitle ? (
        <input ref={node} className={styles.input} value={newTitle} onChange={onNewTitleChange} />
      ) : (
        <span className={`${styles.text} ${isCompleted ? styles.completedText : ''}`}>{title}</span>
      )}

      {isHover && (
        <button className={styles.deleteIcon} onClick={onDelete}>
          <Icons.Close />
        </button>
      )}
    </div>
  )
}
