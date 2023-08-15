import React, { useState } from 'react';

const Search = ({ stal }) => {
  const [term, setTerm] = useState('');

  const change = (e) => { 
    const terms = e.target.value;
    setTerm(terms);
  };



  return (
    <div className="searchForm">
      <input
        type="text"
        placeholder="bichbich"
        className="search"
        onChange={(e)=>change(e)}
      />
      <button className="searchButton" onClick={()=>stal(term)}>
        &#x1F50E;
      </button>
    </div>
  );
};

export default Search;
