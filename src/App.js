import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard/PersonCard';
import Cumple from './components/Cumple/Cumple';

function App() {
  return (
    <div className="container">
    <div className="card">
      <PersonCard lastName={"Doe,"} firstName={"Jane"} hairColor={"Black"}/>
      <Cumple num={45} aumento={1}/>
      <PersonCard lastName={"Smith,"} firstName={"John"} hairColor={"Brown"}/>
      <Cumple num={88} aumento={1}/>
      <PersonCard lastName={"Fillmore,"} firstName={"Millard"}  hairColor={"Brown"}/>
      <Cumple num={50} aumento={1}/>
      <PersonCard lastName={"Smith,"} firstName={"Maria"} hairColor={"Brown"}/>
      <Cumple num={64} aumento={1}/>
    </div>
  
    </div>
  );
}

export default App;
