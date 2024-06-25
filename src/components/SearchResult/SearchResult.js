import TrackList from '../TrackList/TrackList';
import './SearchResult.css';

export const SearchResult = ({ isLoading, searchResults, onAdd }) => {
  return (
    <div className='search-results'>
      <h2>Results</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <TrackList tracks={searchResults} onAdd={onAdd} isRemoval={false} />
      )}
    </div>
  );
};
