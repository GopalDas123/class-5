import React,{useState} from "react";
import Child from "./Child";
import Context from "./CounterContext";
import "./App.css";
import ChildR from './ChildForReducer'

function App() {
  const num=useState(1)
  return (
    <Context.Provider value={num}>
      <div>
        <Child />
        <ChildR />
      </div> 
    </Context.Provider>
  );
}

export default App;
