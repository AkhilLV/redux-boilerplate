import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { increment, decrement } from "./actions"

import DisplayCounter from "./components/DisplayCounter"

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
      {counter}
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <DisplayCounter />
    </div>
  )
}

export default App
