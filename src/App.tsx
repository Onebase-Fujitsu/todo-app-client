import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import NewTask from './pages/NewTask'
import {AppDispatch} from "./stores/store";
import {getTodoAction} from "./stores/todoSlice";

function App() {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodoAction())
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/newTask" exact render={() => <NewTask />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
