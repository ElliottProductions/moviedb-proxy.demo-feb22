import './App.css';
import { getMonsters } from './services/fetch-utils';
import { useState, useEffect } from 'react';

function App() {
  const [monsters, setMonsters] = useState();

  async function load() {
    const data = await getMonsters();
    console.log(data);
    setMonsters(data);
  }

  useEffect(() => {
    load();
  }, []); // eslint-disable-line

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
