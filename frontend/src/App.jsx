import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}
  from 'react-router-dom';  


import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <div >
      <Router>
        <Routes>
          <Route path='' element={<Dashboard />}></Route>
          <Route path='signup' element={<SignUp/>}></Route>
          <Route path='signin' element={<SignIn />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
