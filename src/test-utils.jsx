import {render as rtlRender} from '@testing-library/react'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import todoSlice from './stores/todoSlice'

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {todos: todoSlice.reducer},
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({children}) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}

export * from '@testing-library/react'
export {render}