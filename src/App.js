import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('') // [state, setState
  const handleClick = (event) => {
    setName(event.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>{name}</h1>

        <input type="text" placeholder="Enter your name" />
        <button onClick={handleClick}>Set Name</button>
      </header>
    </div>
  );
}

export default App;
