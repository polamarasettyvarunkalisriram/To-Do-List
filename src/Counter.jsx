import React, { useState } from 'react'

const Counter = () => {
    const [count,setcount]=useState(0);
    const increment=()=>{
        setcount(count+1);
    }
     const decrement=()=>{
        if(count>0){
        setcount(count-1);
        }
    }
    const reset=()=>{
        setcount(0);
    }
  return (
    <div>{count}
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter