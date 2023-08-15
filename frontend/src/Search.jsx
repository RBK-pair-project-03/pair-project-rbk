import React, { useState } from 'react';
const Search = ({ bucket }) => {
  const [term,setTerm] = useState('');
  const handleChange = (e) => {
    const newTerm = e.target.value;
    setTerm(newTerm);
    stal(newTerm);
  };
const handleClick=()=>{
    
}

  return (
    <div>
      <input
        type="text"
        placeholder="Snawnaw is waiting !"
        onChange={(e)=>handleChange(e)}
      />
      <button onClick={()=>bucket(term)}>
        &#x1F50E;
      </button>
    </div>
  );
};
export default Search;