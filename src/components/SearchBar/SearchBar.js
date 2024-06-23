import { useCallback, useState } from 'react';
import './SearchBar.css';

export const SearchBar = ({ search }) => {
  const [term, setTerm] = useState('');

  const onChange = useCallback((e) => {
    setTerm(e.target.value);
  }, []);

  const handleSearch = useCallback(() => {
    debugger;
    search(term);
  }, [search, term]);

  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='What do you want to play?'
        onChange={onChange}
      />
      <button className='search-button' onClick={handleSearch}>
        SEARCH
      </button>
    </div>
  );
};
