import React from 'react'

const Onclick = () => {
    const sriram=(a,b)=>{
        console.log(a+b)
    }
  return (
    <div>
        <button onClick={sriram(1,2)}>click me </button>
    </div>
  )
}

export default Onclick