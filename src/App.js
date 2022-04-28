import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicTable from './MusicTable/MusicTable';
import './App.css';
import AddSong from './AddSong/AddSong';
import SearchBar from './SearchBar/SearchBar';

function App() {

  const[songs, setSongs] = useState([]);

  useEffect(()=> {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    setSongs(response.data);
  }

  return (
    <div>
      <div>
        <MusicTable songs={songs}/>
      </div>
      <div>
        <AddSong/>
      </div>
      <div>
        <SearchBar songs={songs} setSongs={setSongs} />
      </div>



    </div>
  );
}

export default App;
