import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, {Fragment, useEffect, useState} from 'react'
import axios from "axios"


function App() {
  const [counter, setCounter] = useState(0);
  const[intialvalue, setIntialvalue] = useState(0);

  let count = 0;
  for(let i=1;i<=intialvalue;i++){
    count = count+i;
  }
  // When we are not entering another input and just clicking button makes Rerenders the whole for loop also with counter value 
  // but count value is not changing from last render to the present render so we are using Memoization

  return <div>
    <input type="text" onChange={(e)=>{setIntialvalue(e.target.value)}}/>
    {/*e.target.value gives the actual value inside the input box*/}
    <br /><br />

    <div>Sum from 0 to {intialvalue} is : {count}</div>

    <button onClick={()=>{
      setCounter(counter+1);
    }}>
      Counter ({counter}) 
    </button>
  </div>
}

export default App;

//2).  Second  best approach for only for loop , using useEffect but usememo is there as a good solution

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, {Fragment, useEffect, useState} from 'react'
import axios from "axios"


function App() {
  const [counter, setCounter] = useState(1);
  const[intialvalue, setIntialvalue] = useState(0);
  const[finalvalue, setFinalvalue] = useState(1);
  useEffect(()=>{
    let count = 0;
    for(let i=1;i<=intialvalue;i++){
      count = count+i;
    }
    setFinalvalue(count);
  })


  return <div>
    <input type="text" onChange={(e)=>{setIntialvalue(e.target.value)}}/>
    <br /><br />

    <div>Sum from 0 to {intialvalue} is : {finalvalue}</div>

    <button onClick={()=>{
      setCounter(counter+1);
    }}>
      Counter ({counter}) 
    </button>
  </div>
}

export default App;

//3). So using useMemo , no unneccessary renders are there.


