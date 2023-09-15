import React from 'react';
import './App.css';
const imgLink = "https://assets.telegraphindia.com/telegraph/2021/Jan/1610742405_shutterstock_1348133177.jpg"
const App = ()=>{
  return (
    <div className="App">
    <div className="header">
      <h1>Samosa Selector</h1>
      <h2>Count:</h2>
      <img className='samosa' src ={imgLink}/>
    </div>
     
    </div>
  );
}
export default App