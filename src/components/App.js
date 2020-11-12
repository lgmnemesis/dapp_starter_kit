import React, { useContext } from 'react';
import { StateContext } from '../contexts';
import './App.css';

function App() {

  const [state, dispatch] = useContext(StateContext);
  const buttonText = state.some_state ? 'on' : 'off';

  const handleButtonClick = () => {
    dispatch({type: 'SOME_CASE'});
  }

  return (
    <div className="App">
      <p>{state.some_state}</p>
      <button onClick={handleButtonClick}>{buttonText}</button>
    </div>
  );
}

export default App;
