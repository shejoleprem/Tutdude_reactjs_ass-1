import React,{useState} from 'react';
import App from '../App';
const FunctionCounter=()=>{
    const [count, setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    }

    const decrement=()=>{
        if(count>0){
            setCount(count-1);
        }
    }

    return(
         <div className="counter-container">
            <h2>Functional Counter</h2>
            <div className="count-display">{count}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};
export default FunctionCounter;