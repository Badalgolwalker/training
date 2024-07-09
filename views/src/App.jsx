import React from 'react'
import Login from './page/login'
import { Route, Routes, Navigate } from 'react-router-dom'

import RegisterPgae from "./page/registerpage"
import Home from './page/Home'
import ForgetPassword from "./page/forgetpassword"
import Password from "./page/password"
import Edit from './page/edit'
const App = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home />}/>
    
        <Route path='/register' element={<RegisterPgae />}/>

       <Route path='/login' element={<Login />}/>
       <Route path='/forgetpasswordmail' element={<ForgetPassword />} />
       <Route path="/password/:userId" element={<Password />} />
       <Route path="/update" element={<Edit />} />
       

     
    </Routes>
    </div>
  )
}

export default App