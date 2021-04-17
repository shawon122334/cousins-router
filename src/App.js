import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Cousin from './Components/Cousin/Cousin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [cousins,setCousins]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>setCousins(data))
  },[])
  return (
    <div>
      <h2>cousins length : {cousins.length}</h2>
      {
        cousins.map(cousin=> <Cousin cousin={cousin}></Cousin>)
      }
    </div>
  );
}

export default App;
