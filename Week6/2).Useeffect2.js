// In useEffect function dependencies i have passed id because whenever i have clicked the button 
//corresponding id should Rerender and send to the backend for todo information though the axios fetch call.

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, {Fragment, useEffect, useState} from 'react'
import axios from "axios"

function App() {
  const[ids, setIds] = useState(1);

  return(
    <div>
      <button  onClick={function(){
        setIds(1);
      }}>Todo1</button>
      <button onClick={function(){
        setIds(2)
      }}>Todo2</button>
      <button  onClick={function(){
        setIds(3)
      }}>Todo3</button>
      <button   onClick={function(){
        setIds(4)
      }}>Todo4</button>

      <Todo id = {ids}/>

    </div>
  )
}
function Todo({id}){
  const[todo, setTodo] = useState({})

  useEffect(function(){
    axios.get("https://sum-server.100xdevs.com/todo?id=" +id)
      .then(response =>{
        setTodo(response.data.todo)
      })
  },[id])

  return <div>
    Id : {id}
    <h1>{todo.title}</h1>
    <h4>{todo.description}</h4>
  </div>
}
export default App
