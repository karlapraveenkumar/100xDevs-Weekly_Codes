1) Prop drilling problem

import React, { useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Count count={count} setCount={setCount}/>
    </div>

  )
}
//Count function really not need of setCount and it is taking and passing to other components
// We are drilling down the props ...it is called as propdrilling
function Count({count, setCount}){
  return <div>
    {count}
    <Buttons count={count} setCount={setCount}/>
  </div>
}
function Buttons({count,setCount}){
  return <div>
    <button onClick={()=>{setCount(count+1)}}>Increase</button>
    <button onClick={()=>{setCount(count-1)}}>Decrease</button>
  </div>
}
export default App

2). Solution for Propdrilling by ContextAPI

import React, { useContext, useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
import { Countcontext } from './context';

function App() {
  const [count, setCount] = useState(0);
  // wrap anyone that wants to use teleported value inside a provider
  return (
    <div>
      <Countcontext.Provider value={count}>
        <Count count={count} setCount={setCount}/>
      </Countcontext.Provider>
    </div>

  )
}
//passing count to CountRenderer, Buttons directly without being passed as a prop from return..
function Count({setCount}){
  return <div>
    <CountRenderer/>
    <Buttons setCount={setCount}/>
  </div>
}
function CountRenderer(){
  const count = useContext(Countcontext)
  return <div>
    {count}
  </div>
}
function Buttons({setCount}){
  const count = useContext(Countcontext)
  return <div>
    <button onClick={()=>{setCount(count+1)}}>Increase</button>
    <button onClick={()=>{setCount(count-1)}}>Decrease</button>
  </div>
}
export default App
// This is in created in another file named context.jsx
import { createContext } from "react";
//This is teleporting part, better like this in other file
export const Countcontext = createContext(0);
