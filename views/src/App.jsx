import React, { useEffect, useState } from 'react'
import Login from './page/login'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'

import RegisterPgae from "./page/registerpage"
import Home from './page/Home'
import ForgetPassword from "./page/forgetpassword"
import Password from "./page/password"
import Edit from './page/edit'
import CreatrePRoduct from './page/creatrePRoduct'
import Editproduct from './components/editproduct'
import Categorycreate from './components/categorycreate'
import Subcategorycrete from "./components/subcategorycreate"

const App = () => {

  const [isAuth, setisAuth] = useState(false)


useEffect(() => {
  const token = JSON.parse(localStorage.getItem("token"))
if(token){
  setisAuth(true)
}
console.log(isAuth)
}, [])

  return (
    <div>
        <Routes>
        <Route path='/' element={isAuth ?<Home />:<Navigate to="/login" />}/>
    
        <Route path='/register' element={<RegisterPgae />}/>

       <Route path='/login' element={<Login />}/>
       <Route path='/forgetpasswordmail' element={<ForgetPassword />} />
       <Route path="/password/:userId" element={<Password />} />
       <Route path="/update" element={<Edit />} />
       <Route path="/createPRoduct" element={<CreatrePRoduct />} />
       <Route path="/editproduct/:id" element={<Editproduct />} />
       <Route path="/categorycreate" element={<Categorycreate />} />
       <Route path="/Subcategorycreate" element={<Subcategorycrete />} />
       

     
    </Routes>
    </div>
  )
}

export default App