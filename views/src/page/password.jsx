import React, { useState } from 'react';
import axios from 'axios'; // Import axios from axios library
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const ForgetPassword = () => {
  const { userId } = useParams(); 

  const [Password, setPassword] = useState("");
  const navigate = useNavigate()

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/user/forget-link/${userId}`, {
        password: Password,
      });

      if (!response) {
        toast.error("Bad request");
        return;
      }
  
if(response.data.message){
  toast.success(response.data.message)
setTimeout(() => {
  navigate("/login")
}, 1500);
}
console.log(response)
    } catch (error) {
     
      toast.error("this link is invalid");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-8 border-slate-400 bg-white  rounded-lg shadow-lg  border-2 shadow-slate-600 bg-gradient-to-r from-cyan-300 to-blue-300">
        <h2 className="text-2xl font-bold mb-6">create new password</h2>
        <form onSubmit={submithandler}>
          <div className="mb-4">
            <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
              Password 
            </label>
            <input
              type="Password"
              id="Password"
              name="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your Password "
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default ForgetPassword;
