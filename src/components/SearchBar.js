import React, {useState} from 'react';

const SearchBar = ({onSearch}) => {
  const [searchText, setSearchText] = useState('');

  const onSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchText);
  }

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSearchSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input type="text" 
            value={searchText} 
            onChange={e => setSearchText(e.target.value)} 
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar;