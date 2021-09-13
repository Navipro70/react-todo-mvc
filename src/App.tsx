import React from 'react'

import { StoreProvider } from './store'

import { TodosPage } from './pages'

export const App = () => (
  <StoreProvider>
    <TodosPage />
  </StoreProvider>
)
