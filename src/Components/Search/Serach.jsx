import React from 'react';
import './Search.css';

const Search = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." className="search-input" />
      <button className="search-button">Search</button>
    </div>
  );
}

export default Search;
