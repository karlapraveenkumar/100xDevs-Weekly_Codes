import React from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
//import Dashboard from React.lazy(()=>import("./components/Dashboard"));
//import Landing from React.lazy(()=>import("./components/landing"));
const Landing = React.lazy(() => import('./components/Landing'));
const Dashboard = React.lazy(() => import('./components/Dashboard'));




function App() {

  return (
    <div>
      <BrowserRouter> 
        <Appbar/>
        <Routes>
          <Route path="/dashboard" element={<React.Suspense fallback={"loading..."}><Dashboard /></React.Suspense>} />
          <Route path="/" element={<React.Suspense fallback={"loading..."}><Landing /></React.Suspense>}/>
        </Routes>
    </BrowserRouter>
    </div>

  )
}
function Appbar(){
  const navigate = useNavigate();
  return <div>
    <div>
      <button onClick={()=>{
        navigate('/')
      }}>LandingPage</button>
      <button onClick={()=>{
        navigate('/Dashboard')
      }}>DashboardPage</button>
    </div>

  </div>

}

export default App
