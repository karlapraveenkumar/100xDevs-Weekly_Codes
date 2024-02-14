import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, {Fragment, memo, useCallback, useEffect, useMemo, useRef, useState} from 'react'
import axios from "axios"


function App() {
  
  const [incometax,setIncometax] = useState(10000);
  const divfref = useRef();

  useEffect(()=>{setTimeout(function(){
    console.log(divfref.current);
    divfref.current.innerHTML = 10;
  },5000)},[])
  
  

  return <div>
    hi there your incometax returns are <div ref={divfref}>{incometax}</div>
  </div>
}

export default App;

2).. Best example for useRef

import React, { useRef, useState } from 'react';

function MyComponent() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Access and modify the ref without causing a re-render
    countRef.current += 1;
    console.log("Count reference value "+ countRef.current);
    // Trigger a re-render by updating state
    setCount(count + 1);
    console.log("state variable value "+count);
  };

  console.log("state variable value2 is "+count);
  return (
    <div>
      <p>State Count: {count}</p>
      <p>Ref Count: {countRef.current}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
export default MyComponent
