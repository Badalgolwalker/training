import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const AllCart = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/cart/read");
        if (response.data) {
          setProducts(response.data);
          setLoading(false)
   
        }
      } catch (error) {
        toast.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);
  if(loading){
return <h1 className='text-3xl font-bold m-4'>loading ......</h1>
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h2>
        {products.map((cartItem) => (
          <div key={cartItem._id} className="border rounded-lg overflow-hidden shadow-md mb-4">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">Product Details</h3>
              <p className="text-gray-600">Quantity: {cartItem.quantity}</p>
              <p className="text-gray-600">User ID: {cartItem.user}</p>
        
              {cartItem.product.map((product) => (
                <div key={product._id} className="mt-4">
                  <p className="text-sm font-medium text-gray-800">{product.name}</p>
                  <p className="text-xs text-gray-600">Price: ${product.price}</p>
                  <p className="text-sm text-gray-600">Quantity: {product.quantity}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default AllCart;
