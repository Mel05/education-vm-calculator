import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import {
  titleChanged,
  taskDeleted,
  completedTasd,
  getTasks,
} from "./store/task"
import configureStore from "./store/store"

const store = configureStore()

const App = (params) => {
  const [state, setState] = useState(store.getState())

  useEffect(() => {
    store.dispatch(getTasks())
    store.subscribe(() => {
      setState(store.getState())
    })
  }, [])

  const changeTitle = (taskId) => {
    store.dispatch(titleChanged(taskId))
  }

  const deletedTask = (taskId) => {
    store.dispatch(taskDeleted(taskId))
  }
  console.log(state)
  return (
    <>
      <h1> App </h1>

      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <div>{el.title}</div>
            <div> {`Completed: ${el.completed}`}</div>
            <div>
              <button onClick={() => store.dispatch(completedTasd(el.id))}>
                Completed
              </button>

              <button onClick={() => changeTitle(el.id)}>Change title</button>

              <button onClick={() => deletedTask(el.id)}>Deleted</button>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
