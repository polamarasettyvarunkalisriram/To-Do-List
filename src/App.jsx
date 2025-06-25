import React from 'react'
import Sample from './Sample'
import Onclick from './Onclick'
import Handle from './Handle'
import Colorpicker from './Colorpicker'
import Counter from './Counter'
import Formevent from './Formevent'
import Update from './Update'
import Updatearray from './Updatearray'
import Practise from './Practise'
import Todolist from './Todolist'
  const a={
    name:"sriram",
    age:25
  }
const App = () => {

  return (
    <div>
      {/* <Sample hii={a.name} bye={a.age}/>
      <Onclick/>
      <Handle/>
      <Colorpicker/>
      <Counter/>
      <Formevent/>
      <Update/> */}
      {/* <Updatearray/> */}
      {/* <Practise/> */}
      <Todolist/>
    </div>
  )
}

export default App