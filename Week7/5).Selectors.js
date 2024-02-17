import React, { useContext, useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
import { Countcontext } from './context';
import { useRecoilState, useRecoilValue, RecoilRoot, useSetRecoilState } from 'recoil';
import { countAtom, evenoddcheckatom} from './store/atoms/Count';



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
    <Checkeven/>
  </div>
}
function Buttons(){
  //const [count,setCount] = useRecoilState(countAtom);
  //Buttons really not using count, it requires only setCount so we used useSetRecoilState
  //Then count automatically calls by below command
  //So buttons also not Re-render
  console.log("hi from buttons");
  const setCount = useSetRecoilState(countAtom)
  return <div>
    <button onClick={()=>{setCount(count=>count+1)}}>Increase</button>
    <button onClick={()=>{setCount(count=>count-1)}}>Decrease</button>
  </div>
}
function Checkeven(){
  console.log("Hi from CheckEven")
  return <div>
    {useRecoilValue(evenoddcheckatom)}
  </div>
}
export default App

// In Count.jsx file
import { atom, selector } from "recoil";

export const countAtom = atom({
    key : "countAtom",
    default : 0
});
export const evenoddcheckatom = selector({
    key : "evenoddcheckatom",
    get : ({get}) =>{
        const temp = get(countAtom);
        return temp%2==0?"Even":"Odd";
    }
});
