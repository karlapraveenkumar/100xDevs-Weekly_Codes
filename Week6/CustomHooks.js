//1). We can create our own hooks with use... and insert required code into that hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, {Fragment, memo, useCallback, useEffect, useMemo, useState} from 'react'
import axios from "axios"


function useTodos(){
  const[todos, setTodos] = useState([]);
  useEffect(()=>{
    axios.get("")
      .then((res)=>{
        setTodos(res.data.todos)
      })
  },[])
  return todos;
}
function App() {
  const todos = useTodos();

  return <div>
    {todos}
  </div>
}

export default App;

