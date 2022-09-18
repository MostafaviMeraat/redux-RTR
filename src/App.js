import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions'


function App() {
  const counter = useSelector(state => state.counter)
  const logged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      counter is: {counter}
      <button onClick={() => { dispatch(increment(10)) }}>+</button>
      <button onClick={() => { dispatch(decrement()) }}>-</button>
      {logged && <h3>only logged</h3>}

    </div>
  );
}

export default App;
