import React from 'react'
import Login from './components/login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Overview from './pages/Overview'
import Bianalysis from './pages/Bianalysis'
import Help from './pages/Help'
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clients'
import Protected from './pages/Protected'
import Home from './pages/Home'



function App() {
 
  return (
    
    <>
     <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />

          {/* AUTHENTICATED ROUTES */}
          <Route element={<Protected />} >
            <Route exact path="/dashboard" element={<Dashboard />}>
              <Route index  element={<Overview />} />
              <Route path="bianalysis" element={<Bianalysis />} />
              <Route path="clients" element={<Clients />} />
              <Route path="help" element={<Help />} />
            </Route>
          </Route>


        </Routes>
     </Router>
    </>
  )
}

export default App
