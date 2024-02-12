//by using useEffect and need to fetch todos every 10 sec
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
        .then(async function(res) {
          const json = await res.json();
          setTodos(json.todos);
        })
    }, 10000)
  }, [])

  return <div>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
  </div>
}

function Todo({title, description}) {
  return <div>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>
}

export default App;


// Using the axios

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, {Fragment, useEffect, useState} from 'react'
import axios from "axios"

function App() {
  const[todos, setTodos] = useState([]);
  useEffect(()=>{
    // We are now using axios to fetch data from backend
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(function(response){
        setTodos(response.data.todos)
      })
  },[]);

  return(
    <div>
      {todos.map(todo=>
        <Todo key={todo.id} title={todo.title} description={todo.description}/>
      )}
    </div>
  )

}
function Todo({title, description}){
  return(
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  )
}

export default App

