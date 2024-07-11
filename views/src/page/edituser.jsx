import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const EditUser = () => {
  const userId = localStorage.getItem("userId");

  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    contact: '',
    city: '',
    gender: ''
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/fetch/${userId}`);
     
        // Update state with fetched user data
        setUserData(response.data);
      } catch (error) {
       toast.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, [userId]); // useEffect dependency added for userId

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`http://localhost:3000/user/update/${userId}`, userData);
if(response.data){
  toast.success(response.data.message)
}

    } catch (error) {
      toast.error('Error updating user data:', error);

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-8 border-slate-400 bg-white rounded-lg shadow-lg border-2 shadow-slate-600 bg-gradient-to-r from-cyan-300 to-blue-300">
        <h2 className="text-2xl font-bold mb-4">Edit User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
              Firstname
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={userData.firstname}
              onChange={handleChange}
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
              value={userData.lastname}
              onChange={handleChange}
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
              value={userData.contact}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your contact number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={userData.gender}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
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
              value={userData.city}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your city"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Update
          </button>
        </form>
      </div>
       <ToastContainer position="top-center"  />
    </div>
  );
};

export default EditUser;
