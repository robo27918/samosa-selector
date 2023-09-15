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
      <div className='container'>
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p> 2X per click</p>
          <button>10 samosas</button>
        </div>

        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5X per click</p>
          <button>100 samosas</button>
        </div>

        <div className="upgrade">
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>10X per click</p>
          <button>1000 samosas</button>
        </div>
      </div>
     
    </div>
  );
}
export default App