import { useCallback, useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import Spotify from '../../utils/Spotify';
import './App.css';
import Playlist from '../Playlist/Playlist';
import { SearchResult } from '../SearchResult/SearchResult';

const App = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [playlistTrack, setPlaylistTrack] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');

  const search = useCallback(async (term) => {
    try {
      const results = await Spotify.search(term);
      setSearchResult(results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const addTrack = (track) => {
    setPlaylistTrack((prev) => {
      if (prev.includes(track)) {
        return prev;
      }
      return [...prev, track];
    });
  };

  const removeTrack = (track) => {
    setPlaylistTrack((prev) => prev.filter((t) => t.id !== track.id));
  };

  const savePlaylist = () => {
    const trackURIs = playlistTrack.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      setPlaylistTrack([]);
      updatePlaylistName('New Playlist');
    });
  };

  return (
    <div className='app'>
      <SearchBar search={search} />
      <div className='main'>
        <SearchResult searchResults={searchResult} onAdd={addTrack} />
        <Playlist
          playlistName={playlistName}
          playlistTrack={playlistTrack}
          onNameChange={updatePlaylistName}
          onRemove={removeTrack}
          onSave={savePlaylist}
        />
      </div>
    </div>
  );
};

export default App;
