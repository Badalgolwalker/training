import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("Male")
  
  const navigate = useNavigate();

  const submithandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user/signup", {
        email,
        password,
        firstname,
        lastname,
        contact,
        city,
        gender
      });

      if (!response) {
        toast.error("Bad request");
        return;
      }

      const { data } = response;
      if (data.success === true) {
        toast.success("Registration successful");
        setTimeout(() => {
          navigate("/");
        }, 1500);
        setEmail('');
        setPassword('');
        setCity('');
        setContact('');
        setFirstname('');
        setLastname('');
        setGender("")
      } else {
        toast.error("Registration failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error occurred during registration");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-8 border-slate-400 bg-white  rounded-lg shadow-lg  border-2 shadow-slate-600 bg-gradient-to-r from-cyan-300 to-blue-300">
        <h2 className="text-2xl font-bold mb-4">Create Account</h2>
        <form onSubmit={submithandler}>
          <div className="mb-1">
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
              Firstname
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
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
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
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
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your contact number"
            />
          </div>

            <div className="mb-4">
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
              Gender
              </label>
            <select
          value={gender} // Set the selected value from state

             onChange={(e) => setGender(e.target.value)}
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
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your city"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sign up
          </button>
        </form>
        <div className="flex justify-between mt-3">
          <Link to="/login">Login</Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegisterPage;
