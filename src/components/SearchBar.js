import React from 'react';

function SearchBar({ value, onChange, placeholder = 'Search products…' }) {
  return (
    <div className="search-bar">
      <span className="search-bar__icon">🔍</span>
      <input
        type="text"
        className="search-bar__input"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search products"
      />
    </div>
  );
}

export default SearchBar;
