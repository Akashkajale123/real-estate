import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'



const App = () => {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<SignIn/>}/>
    
    <Route path='/signup' element={<SignUp/>}/>

    </Routes>
    </Router>
  )
}

export default App
