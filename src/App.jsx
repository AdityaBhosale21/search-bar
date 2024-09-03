import React, { useState } from 'react'
import './App.css';
import SearchBox from './components/SearchBox';
import SearchResultsList from './components/SearchResultsList';


const App = () => {
  const [results, setResults]= useState([])
  return (
    <div className="App">
      <div className="search-bar-container">
     <SearchBox setResults={setResults}/>
        <SearchResultsList results={results}/>
      </div>
    </div>
  )
}

export default App