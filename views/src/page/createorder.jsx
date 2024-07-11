// CreateOrder.js
import React, { useState } from 'react';
import axios from 'axios';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const CreateOrder = () => {
  const [shippingDetails, setShippingDetails] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');

    try {
      const response = await axios.post('http://localhost:3000/orders/create', {
        user: userId,
        orderItems: [], 
        totalPrice: 0,
        shippingDetails
      });
    

      if (response.data.success) {
        toast.success('Order placed successfully!');
        
      } else {
        toast.error('Failed to place order.');
      }
    } catch (error) {
 
      toast.error('An error occurred while placing the order.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-8 border-slate-400 bg-white rounded-lg shadow-lg border-2 shadow-slate-600 bg-gradient-to-r from-cyan-300 to-blue-300">
        <h2 className="text-2xl font-bold mb-6">Place Order</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input type="text" id="address" name="address" value={shippingDetails.address} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
            <input type="text" id="city" name="city" value={shippingDetails.city} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
            <input type="text" id="postalCode" name="postalCode" value={shippingDetails.postalCode} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
            <input type="text" id="country" name="country" value={shippingDetails.country} onChange={handleInputChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">Place Order</button>
        </form>
      </div>
      <ToastContainer position="top-center"  />
    </div>
  );
};

export default CreateOrder;
