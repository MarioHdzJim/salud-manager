import React from 'react';
import './SearchInput.css';

const SearchInput = ({ value, onChange }) => {
  return (
    <div className="search-container">
      <input 
        type="text" 
        className="search-input"
        placeholder="Buscar paciente por nombre..." 
        value={value}
        onChange={onChange}
      />
      <span className="search-icon">🔍</span>
    </div>
  );
};

export default SearchInput;