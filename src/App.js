import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import WordFrame from './components/WordFrame';
import "../src/css/nav.css";

function App() {
  const [word, setWord] = useState('');
  const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const [data, setData] = useState([]);

  const wordHandler = (e) => {
    setWord(e.target.value);
  }

  const clickHandler = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log(data);
      })


  }

 

  return (
    <div className="app">
      <NavBar/>
      <input type="text" value={word} onChange={wordHandler}></input>
      <button onClick={clickHandler}>Search</button>
      <WordFrame data={data}/>

    </div>
  );
}

export default App;
