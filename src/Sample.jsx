import React from 'react'
import './index.css'
const Sample = (props) => {
  return (
    <div className='div1'>
        <p className='p1'>{props.hii}</p>
        <p className='p2'>{props.bye}</p>
    </div>
  )
}

export default Sample