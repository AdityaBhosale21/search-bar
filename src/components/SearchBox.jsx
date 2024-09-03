import React, {useState} from 'react'
import { FaSearch } from 'react-icons/fa';
import "./SearchBar.css"

const SearchBox = ({setResults}) => {
  const [input, setInput]=useState("")
  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/comments").then((response)=>response.json()).then((json => {
      const results = json.filter((user) => {
        return value && user && user.name && user.name.toLowerCase().includes(value);
      })
      setResults(results);
      
      
    }))
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setInput(value);
    fetchData(value);
  };

  return (
    <div className='input-wrapper'>
      <FaSearch id="search-icon"/>
      <input
        placeholder='Type To Search...'
        value={input}
        onChange={handleChange}
      
      />
    </div>
  );
}

export default SearchBox