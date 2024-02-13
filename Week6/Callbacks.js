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
