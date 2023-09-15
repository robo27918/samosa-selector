import React from 'react';
import './App.css';
import { useState } from 'react';



const imgLink = "https://assets.telegraphindia.com/telegraph/2021/Jan/1610742405_shutterstock_1348133177.jpg"
const App = ()=>{
  //hook to keep track of the total number of clicks
  const [count,setCount] = useState(0);

  //hook to keep track of the number of samosa per click
  const [multiplier, setMultiplier] = useState(1);
 
  //function that sets the value of the state variable count
  //to its current value plus multiplier when called.
  const updateCount = () => setCount(count + multiplier);

  return (
    <div className="App">
    <div className="header">
      <h1>Samosa Selector</h1>
      <h2>Count: {count}</h2>
      <img className='samosa' src ={imgLink} onClick={updateCount}/>
    </div>
     
    </div>
  );
}
export default App