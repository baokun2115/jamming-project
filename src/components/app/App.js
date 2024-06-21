import { useCallback, useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';

const App = () => {
  const [searchResult, setSearchResult] = useState([]);
  const search = useCallback((term) => {
    setSearchResult([
      {
        id: '1',
        name: term,
      },
    ]);
    alert(`You searched for: ${term}`);
  }, []);
  return (
    <div>
      <SearchBar search={search} />
      {searchResult.map((result) => (
        <div key={result.id}>{result.name}</div>
      ))}
    </div>
  );
};

export default App;
