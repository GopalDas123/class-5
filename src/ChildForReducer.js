import React,{useReducer} from 'react';
import CounterReducer from './CounterReducer';

const ChildR=()=>{
    let [state,dispatch]=useReducer(CounterReducer,1)
    console.log(state)
    return(
        <div>
            <h1>Value is: {state}</h1>
            <h3>Using Reducer</h3>
            <button onClick={()=>dispatch('INC')}>+</button>
            <button onClick={()=>dispatch('DEC')}>-</button>
        </div>
    )
}
export default ChildR