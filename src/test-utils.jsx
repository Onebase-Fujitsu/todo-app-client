import {render as rtlRender} from '@testing-library/react'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import todo from './slices/todo'
import {BrowserRouter} from 'react-router-dom'

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {todos: todo.reducer},
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({children}) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    )
  }
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}

export * from '@testing-library/react'
export {render}
