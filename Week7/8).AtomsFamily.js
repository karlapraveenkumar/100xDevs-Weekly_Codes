import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { todoAtomFamily } from "./atoms";
import { useEffect } from "react";

function App(){
  return <RecoilRoot>
    <Updater/>
    <Todo id = {1}/>
    <br />
    <Todo id = {2}/>
    <Todo id = {2}/>
    <Todo id = {2}/>
    <Todo id = {2}/>
    <Todo id = {2}/>
    <Todo id = {2}/>
    <Todo id = {2}/>
    
  </RecoilRoot>
}

function Todo({id}){
  const currentTodo = useRecoilValue(todoAtomFamily(id));
  return <div>
    {currentTodo.title} <br />
    {currentTodo.description}
    <br />
  </div>
}
function Updater(){
  const updateTodo = useSetRecoilState(todoAtomFamily(2));
  useEffect(() => {
    setTimeout(()=>{
      updateTodo({
        id : "2",
        title : "Praveen",
        description : "Learning by Doing"
      })
    },5000)
  },[]);

  return <div>
  </div>
}

export default App

// atoms file

import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todoAtomFamily = atomFamily({
    key : "todoAtomFamily",
    //You can use arrow function as well
    default : id=>{
        return TODOS.find(x=>x.id === id)
        // return TODOS.find(x=>x.id === id)
        /*
        const foundTodo = null;
        for(let i=0;i<TODOS.length;i++){
            if(TODOS[i].id == id){
                foundTodo = TODOS[id]
            }
        }
        return foundTodo;
        */
    }
});

//todos file
export const TODOS = [
    {
    id : 1,
    title : "Hello",
    description : "Hello World"
    },
    {
        id : 2,
        title : "Name",
        description : "What is your name"
    },
]
