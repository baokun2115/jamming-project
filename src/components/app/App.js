import { useCallback, useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import Spotify from '../../utils/Spotify';
import TrackList from '../TrackList/TrackList';

const App = () => {
  const [searchResult, setSearchResult] = useState([]);
  const search = useCallback(async (term) => {
    try {
      const results = await Spotify.search(term);
      setSearchResult(results);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <SearchBar search={search} />
      <div className='App-playlist'>
        <TrackList tracks={searchResult} />
      </div>
    </div>
  );
};

export default App;
