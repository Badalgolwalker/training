import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const edit = () => {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    city: '',
    gender: ''
  });
  useEffect(async () => {
    const response = await axios.get("http://localhost:3000/")
    console.log(response)
  }, [])
  

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-8 border-slate-400 bg-white  rounded-lg shadow-lg  border-2 shadow-slate-600 bg-gradient-to-r from-cyan-300 to-blue-300">
        <h2 className="text-2xl font-bold mb-4">edit profile</h2>
        <form >
          <div className="mb-1">
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
              Firstname
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
             
            
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your firstname"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
              Lastname
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              
          
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your lastname"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
              Contact
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              
            
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your contact number"
            />
          </div>

            <div className="mb-4">
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
              Gender
              </label>
            <select
       
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" name="" id="">
       <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Other">Other</option>
            </select>
            </div>



          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
            
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your city"
            />
          </div>
   
    
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
         upadate
          </button>
        </form>
       
      </div>
      <ToastContainer />
    </div>
  )
}

export default edit