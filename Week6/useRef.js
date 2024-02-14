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
