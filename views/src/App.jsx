import React, { useEffect, useState } from 'react'
import Login from './page/login'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'

import RegisterPgae from "./page/registerpage"
import Home from './page/Home'
import ForgetPassword from "./page/forgetpassword"
import Password from "./page/password"
import Edituser from './page/edituser'
import CreatrePRoduct from './page/creatrePRoduct'
import Editproduct from './components/editproduct'
import Categorycreate from './components/categorycreate'
import Subcategorycrete from "./components/subcategorycreate"
import Createcart from './components/createcart'
import Allcart from './page/allcart'
import CreateOrder from './page/createorder'

const App = () => {

  const [isAuth, setisAuth] = useState(false)


useEffect(() => {
  const token = JSON.parse(localStorage.getItem("token"))
if(token){
  setisAuth(true)
}

}, [])

  return (
    <div>
        <Routes>
        <Route path='/' element={isAuth ?<Home />:<Navigate to="/login" />}/>
    
        <Route path='/register' element={<RegisterPgae />}/>

       <Route path='/login' element={<Login />}/>
       <Route path='/forgetpasswordmail' element={<ForgetPassword />} />
       <Route path="/password/:userId" element={<Password />} />
       <Route path="/update" element={<Edituser />} />
       <Route path="/createPRoduct" element={<CreatrePRoduct />} />
       <Route path="/editproduct/:id" element={<Editproduct />} />
       <Route path="/categorycreate" element={<Categorycreate />} />
       <Route path="/Subcategorycreate" element={<Subcategorycrete />} />
       <Route path="/cartpage/:id" element={<Createcart />} />
       <Route path="/allcart" element={<Allcart/>} />
       <Route path="/createorder" element={<CreateOrder/>} />
       

     
    </Routes>
    </div>
  )
}

export default App