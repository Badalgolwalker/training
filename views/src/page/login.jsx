import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"


import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const login = () => {

const [email, setEmail] = useState("")
const [Password, setPassword] = useState("")
const navigate = useNavigate()

const submithandler = async(e) =>{
e.preventDefault()
try{
const response = await axios.post("http://localhost:3000/user/signin",{
  email: email,
        password: Password
})

if(!response){
  toast.error("Bad request");
  return;

}
const {data} = response
if (data.success === true) {
  toast.success("Login successful");
  setTimeout(() => {
    navigate("/");
  }, 1500);
  setEmail('');
  setPassword('');
} else {
  toast.error("Login failed");
}
}catch(err){
  console.error(err);
  toast.error("Error occurred during login");
}
}
const callapi = async() =>{
  try{
 const response = await axios.post("http://localhost:3000/user/forget-link")
if(!response){
  toast.error("internal server error");
}
console.log(response)
  }catch(err){
    toast.error(err);
  }
}
  return (
    <div className="min-h-screen flex  items-center justify-center  ">
    <div className="max-w-md w-full p-8 border-slate-400 bg-white  rounded-lg shadow-lg  border-2 shadow-slate-600 bg-gradient-to-r from-cyan-300 to-blue-300">
      <h2 className="text-2xl font-bold mb-6">Log In</h2>
      <form onSubmit={submithandler}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
value={email}
            onChange={(e) =>{setEmail(e.target.value)}}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your email address"
          />
         
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={Password}
            onChange={(e) =>{setPassword(e.target.value)}}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Log In
        </button>

      </form>
     <div className='flex justify-between mt-3'>
     <Link to="/register">registerPage</Link>
      <Link
      to="/forgetpasswordmail"
               
                className="text-sm text-indigo-500 hover:text-indigo-700 focus:outline-none"
              >
                Forgot Password?
              </Link>
     </div>
    </div>
    <ToastContainer position="top-center"  />
  </div>

  )
}

export default login