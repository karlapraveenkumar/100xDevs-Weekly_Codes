//1.) The useCallback hook in React is used to memoize a callback function, optimizing performance by preventing 
//unnecessary re-creation of the callback on each render.It is particularly useful in scenarios where a callback function is 
//passed down to child components as a prop, and you want to ensure that the callback reference remains stable unless certain dependencies change.


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, {Fragment, memo, useCallback, useEffect, useMemo, useState} from 'react'
import axios from "axios"


function App() {
  const[count, setCount] = useState(0);

  const logsomething =useCallback(()=>{
    console.log("child clicked");
  },[]);

  return <div>
    <Child inputfunction={logsomething}/><br /><br />
    <button onClick={()=>{
      setCount(count+1);
    }}>ClickMe {count}</button>

  </div>
}

const Child = memo(({inputfunction})=>{
  console.log("child render");
  return <div>
    <button onClick={inputfunction} >Button Clicked</button>
  </div>
})

export default App;

2)// Another problem for useCallback

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, {Fragment, memo, useCallback, useEffect, useMemo, useState} from 'react'
import axios from "axios"


function App() {
  const[exchangedata1, setExchangedata1] = useState({});
  const[exchangedata2, setExchangedata2] = useState({});
  const[bankdata, setBankdata] = useState({});
  

  useEffect(()=>{setTimeout(function(){
    setBankdata({income : 100});
  },5000)},[])
  
  useEffect(()=>{
    setExchangedata1({returns : 100});
  },[])

  useEffect(()=>{
    setExchangedata2({returns : 100});
  },[])
  
  const totalreturns = useCallback(function(){
    return exchangedata1.returns + exchangedata2.returns;
  },[exchangedata1,exchangedata2])
  

  return <div>
    <Child totalreturns = {totalreturns}/>

  </div>
}
const Child = memo(function({totalreturns}){
  console.log("Crypto currency  child rerendeer");
  return <div>
    Your crypto returns are {totalreturns()}
  </div>
})

export default App;
