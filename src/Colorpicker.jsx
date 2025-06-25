import React,{useState} from 'react'

const Colorpicker = () => {
    const [color,setcolor]=useState('#000000');
    function changecolor(e){
        setcolor(e.target.value);
    }
  return (
    <div>
        <p style={{background:color,width:'100px'}} >{color} </p>
        <label>Selected the code: </label>
        <input type="color" value={color}onChange={changecolor} />

    </div>
  )
}

export default Colorpicker