import React from 'react'
import { TodosFilter } from 'src/constants'

import styles from './Menu.module.css'

interface Props {
  filter: TodosFilter
  uncompletedCount: number
  hasCompleted: boolean
  onClearAll: () => void
  onSwitchTodosFilter: (filter: TodosFilter) => void
}

export const Menu = ({
  filter,
  uncompletedCount,
  hasCompleted,
  onClearAll,
  onSwitchTodosFilter,
}: Props) => (
  <div className={styles.container}>
    <span>{`${uncompletedCount} ${uncompletedCount === 1 ? 'item' : "item's"} left`}</span>

    <div className={styles.filterContainer}>
      {Object.entries(TodosFilter).map(([label, value]) => (
        <button
          className={`${styles.filterBtn} ${filter === value ? styles.selectedFilter : ''}`}
          onClick={() => onSwitchTodosFilter(value)}
        >
          {label}
        </button>
      ))}
    </div>

    <button className={styles.btn} onClick={onClearAll}>
      {hasCompleted ? 'Clear completed' : ''}
    </button>
  </div>
)
