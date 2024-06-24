import TrackList from '../TrackList/TrackList';
import './SearchResult.css';

export const SearchResult = ({ searchResults, onAdd }) => {
  return (
    <div className='search-results'>
      <h2>Results</h2>
      <TrackList tracks={searchResults} onAdd={onAdd} />
    </div>
  );
};
