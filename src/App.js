import './App.css';
import { getMonsters } from './services/fetch-utils';
import { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState('pika');
  const [loading, setLoading] = useState(false);

  async function load() {
    setLoading(true);
    const data = await getMonsters(search);
    setMonsters(data);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []); // eslint-disable-line

  async function handleSearch(e) {
    e.preventDefault();

    await load();
  }

  return (
    <div className="App">
      <form onSubmit={handleSearch}>
        <label>Search for a Pocket Monster: <input onChange={ e => setSearch(e.target.value)}/></label>
      </form>
      { loading ? <LoadingSpinner /> : 
        <header className="App-header">
          {monsters.map(monster => <div key={monster._id}>
            <p>{monster.pokemon}</p>
            <p>hp: {monster.hp}</p>
            <p>shape: {monster.shape}</p>
            <img src={`${monster.url_image}`}/>
          </div>)}
        
        </header>
      }
    </div>
  );
}

export default App;
