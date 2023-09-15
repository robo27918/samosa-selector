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
  
  const buyDoubleStuffed = () =>{
    if (count >=10){
      setCount(count-10)
      setMultiplier(multiplier*2);
    }
  }

  const buyPartyPack= () =>{
    if(count>=100){
      setMultiplier(multiplier*5);
      setCount(count -100);
    }
  }
  const buyFullFeast = () =>{
    if(count>=1000){
      setMultiplier(multiplier *10);
      setCount(count - 1000)
    }
  }
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
          <button onClick={buyDoubleStuffed}>10 samosas</button>
        </div>

        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5X per click</p>
          <button onClick={buyPartyPack}>100 samosas</button>
        </div>

        <div className="upgrade">
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>10X per click</p>
          <button onClick={buyFullFeast}>1000 samosas</button>
        </div>
      </div>
     
    </div>
  );
}
export default App