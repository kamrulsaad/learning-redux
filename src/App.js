import { useDispatch, useSelector } from "react-redux";
import { action } from "./store";


function App() {

  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const increment = () => {
    dispatch(action.increment())
  }
  const decrement = () => {
    dispatch(action.decrement())
  }
  const addByTen = () => {
    dispatch(action.addBy(10))
  }

  return (
    <div >
      <h1>Counter App</h1>
      <h3>{counter}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addByTen}>Add By 10</button>
    </div>
  );
}

export default App;
