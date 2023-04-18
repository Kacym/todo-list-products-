import { useState } from 'react';
import './App.css';
import Button from './components/UI/Button';
import Modal from './components/modal/Modal';


function App() {
  
  const [state, setState] = useState(false);

  function changeState() {
    setState(!state)
  }

  return (
    <div className="App">
      <Button click={changeState} title="open modal"/>
      {
        state ? <Modal changeState={changeState}/> : null
      }
    </div>
  );
}

export default App;
