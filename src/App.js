import React, {useState} from 'react';
import logo from './logo.svg';
import Parent from './Parent'
import './App.css';

function App() {
  let [number, setNumber]= useState(1);
  return (
    <div>
      Hello World
      <Parent num={number}></Parent>
      <button onClick={()=>{ setNumber(++number) } }>Update Number</button>
    </div>
  );
}

export default App;
