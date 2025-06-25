import React, { useState } from 'react'

const Handle = () => {
    const [name,setname]=useState("vyshuu ");
    const [quality,setquality]=useState(1);
    function vyshuuram(e){
      setname(e.target.value)
    }
    function handlequality(event){
      setquality(event.target.value);
    }
  return (
    <div>
      <input value={name} onChange={vyshuuram}/>
      <p>Name:{name}</p>
      
        <input type="number" value={quality} onChange={handlequality}/>
        <p>Quality:{quality}</p>
      
    </div>
  )
}

export default Handle