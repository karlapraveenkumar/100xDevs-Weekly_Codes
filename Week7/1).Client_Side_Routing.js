import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/landing'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Appbar/>
        <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<Landing/>}/>
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
//2 Components created for Landingpage and Dashboard these were imported
export default function Dashboard(){
    return <div>
        Dashboard page
    </div>
}
export default function Landing(){
    return <div>
        Landing page
    </div>
}
