import { useCallback, useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import Spotify from '../../utils/Spotify';
import './App.css';
import Playlist from '../Playlist/Playlist';
import { SearchResult } from '../SearchResult/SearchResult';

const App = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [playlistTrack, setPlaylistTrack] = useState([]);

  const search = useCallback(async (term) => {
    try {
      const results = await Spotify.search(term);
      setSearchResult(results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onNameChange = (name) => {
    setPlaylistTrack(name);
  };

  const addTrack = (track) => {
    setPlaylistTrack((prev) => {
      if (prev.includes(track)) {
        return prev;
      }
      return [...prev, track];
    });
  };
  return (
    <div className='App'>
      <SearchBar search={search} />
      <div className='main'>
        <SearchResult searchResults={searchResult} onAdd={addTrack} />
        <Playlist playlistTrack={playlistTrack} onNameChange={onNameChange} />
      </div>
    </div>
  );
};

export default App;
