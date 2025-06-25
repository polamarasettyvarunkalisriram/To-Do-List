import React, { useState } from "react";
import "./index.css";

const Practise = () => {
  const [love, setlove] = useState([]);
  const [yearslove, setyearlove] = useState(new Date().getFullYear());
  const [vyshuumeets, setvyshuumeets] = useState("");
  const [rammmeet, setrammeet] = useState("");
  const [bothmeets,setbothmeets]=useState("");
  const [lovestart,setlovestart]=useState("");


  const addlove = () => {
      const lifeline={
        year:yearslove,
        vyshuu:vyshuumeets,
        ramm:rammmeet,
        both:bothmeets,
        begin:lovestart
      }
      setlove(l=>[...l,lifeline]);
      setyearlove(new Date().getFullYear())
      setvyshuumeets("")
      setrammeet("")
      setbothmeets("")
      setlovestart("");

  };
  const yearlove = (e) => {
    setyearlove(e.target.value);
  };

  const vyshuumeet=(e)=>{
    setvyshuumeets(e.target.value);
  }
  
  const rammeet=(e)=>{
    setrammeet(e.target.value);
  }
  const bothofmeet=(e)=>{
    setbothmeets(e.target.value);
  }
  const lovebegin=(e)=>{
    setlovestart(e.target.value);
  }
  return (
    <div className="love-container">
      <h2>Life of VyshuuRam  💞</h2>
     <ul>
  {love.map((element, index) => (
    <li key={index}>
      <span>{element.year}</span>
      <span>{element.vyshuu}</span>
      <span>{element.ramm}</span>
      <span>{element.both}</span>
      <span>{element.begin}</span>
    </li>
  ))}
</ul>


      <label>
        Year Love:
        <input
          type="number"
          placeholder="Vyshuu love start from"
          value={yearslove}
          onChange={yearlove}
        />
      </label>
      <br></br>
      <br></br>
      <label>
        Vyshuu memorial day with Ram:
        <input type="text" placeholder="Memorable day for Ram" value={vyshuumeets} onChange={vyshuumeet} />
      </label>
      <br></br>
      <br></br>
      <label>
        Ram memorial day Vyshuu:
        <input type="text" placeholder="First moment" value={rammmeet} onChange={rammeet} />
      </label>
      <br></br>
      <br></br>
      <label>
        Both meet on:
        <input  type="date" placeholder="Date" value={bothmeets} onChange={bothofmeet} />
      </label>
      <br></br>
      <br></br>
      <label>
        Love starts from:
        <input type="text" placeholder="Love begins..." value={lovestart} onChange={lovebegin}/>
      </label>
      <br></br>
      <br></br>
      <button onClick={addlove}>Love You Vyshuu 💖</button>
    </div>
  );
};

export default Practise;
