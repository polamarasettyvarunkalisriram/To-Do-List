import React, { useState } from 'react'

const Updatearray = () => {
    const [car,setcar]=useState([]);
    const [caryear,setcaryear]=useState(new Date().getFullYear());
    const [carname,setcarname]=useState("");
    const [carmodel,setcarmodel]=useState("");

    const addcar=()=>{
      const newcar={
        year:caryear,
        name:carname,
        model:carmodel
      }
      setcar(c=>[...c,newcar]);
      setcarmodel("")
      setcarname("")
    }
    const removecar=(index)=>{
        setcar(c=>c.filter((_,i)=>
          i!==index
      ))
    }
    const addcaryear=(e)=>{
        setcaryear(e.target.value);
    }
     const addcarname=(e)=>{
        setcarname(e.target.value);
    }
     const addcarmodel=(e)=>{
      setcarmodel(e.target.value);
    }
  return (
    <div>
        list of car
        <ul>
            {car.map((element,index)=>
              <li key={index} onClick={()=>removecar(index)}>{element.year} {element.name} {element.model}</li>
            )}
        </ul>
        <input type='number' value={caryear} onChange={addcaryear}/>
        <input type='text'placeholder='enter the carname' value={carname} onChange={addcarname}/>
        <input type='text'placeholder='enter the carname' value={carmodel}   onChange={addcarmodel}/>
        <button onClick={addcar}>add car</button>
        {/* <button onClick={removecar}>remove car</button> */}
    </div>
  )
}

export default Updatearray