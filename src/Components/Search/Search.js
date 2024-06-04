import React from "react";
import './search.css'
function Search({term,searchKeyword}) {
  const handleSearch = (e) => {
    searchKeyword(e.target.value)
  };
  return (
   <div className="main">
   
    <div className="search-container">
    <h1>BooKies 😊</h1>
      <input
        type="text"
        placeholder="Enter your book name"
        onChange={handleSearch}
        value={term}
      />
    </div>
   </div>
    
  );
}

export default Search;
