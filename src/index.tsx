import {StrictMode} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import './index.css'
import App from './App'
import {store} from './stores/store'

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
