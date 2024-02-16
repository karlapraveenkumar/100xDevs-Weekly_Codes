// With context api, Rerenders will still occurs those who do not use state variables so Recoil reduces Re-renders.
import React, { useContext, useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
import { Countcontext } from './context';
import { useRecoilState, useRecoilValue, RecoilRoot } from 'recoil';
import { countAtom } from './store/atoms/Count';

function App() {
  // wrap anyone that wants to use teleported value inside a provider
  return (
    <div>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
    </div>

  )
}
//passing count to CountRenderer, Buttons directly without being passed as a prop from return..
function Count(){
  console.log("hi praveen");
  return <div>

    <CountRenderer/>
    <Buttons />
  </div>
}
function CountRenderer(){
  const count = useRecoilValue(countAtom)
  return <div>
    <b>
      {count}
    </b>
  </div>
}
function Buttons(){
  const [count,setCount] = useRecoilState(countAtom);
  return <div>
    <button onClick={()=>{setCount(count+1)}}>Increase</button>
    <button onClick={()=>{setCount(count-1)}}>Decrease</button>
  </div>
}
export default App

// In another file we are declaring atom (piece of code i.e state)

import { atom } from "recoil";

export const countAtom = atom({
    key : "countAtom",
    default : 0
});
