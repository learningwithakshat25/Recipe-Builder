import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import Bundler from './Layout/Bundler'
import UserDashboard from './Pages/UserDashboard'
import Why from './Pages/Why'


const App = () => {

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<AppLayout/>}>
    <Route path='/' element={<Bundler/>}/>
    <Route path='/userDashboard' element={<UserDashboard/>}/>
    <Route path='/why' element={<Why/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
    
  )
}

export default App