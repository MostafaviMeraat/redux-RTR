import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, setLog } from './actions'


function App() {
  const counter = useSelector(state => state.counter)
  const logged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>
        <h1>{counter}</h1>
      </div>

      <div className='buttons'>
        <button onClick={() => { dispatch(decrement()) }}>Minus</button>
        <button onClick={() => { dispatch(increment(10)) }}>Plus</button>
        {logged ?
          <button onClick={() => { dispatch(setLog(logged)) }}>Log Out</button>
          :
          <button onClick={() => { dispatch(setLog(logged)) }}>Log In</button>}
      </div>
      {logged && <h3>if you're logged in you can see this</h3>}

    </div>
  );
}

export default App;
