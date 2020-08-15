import React,{useContext} from 'react';
import Context from './CounterContext';

const Child =()=>{
    let value=useContext(Context)
    return(
        <div>
            <h1>Value is:{" "+value[0]} </h1>
            <h3>Using Context Api</h3>
            <button onClick={()=>{value[1](++value[0])}}>+</button>
            <button onClick={()=>{value[1](--value[0])}}>-</button>
        </div>
    )
}
export default Child