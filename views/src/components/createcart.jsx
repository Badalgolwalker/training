import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateCart = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) {
      toast.error("Please log in to add items to your cart.");
      navigate("/login");
    }
  }, [userId, navigate]);

  const handleAddToCart = async () => {
    try {
      const response = await axios.post("http://localhost:3000/cart/create", {
        productId: id,
        quantity,
        userId,
      });

      console.log(response);

      if (response.data) {
        toast.success("Item added to cart successfully!");
        // Redirect to the cart page or another page if needed
      setTimeout(() => {
        navigate("/allcart")
      }, 1500);
      } else {
        toast.error("Failed to add item to cart.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while adding the item to the cart.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-8 border-slate-400 bg-white rounded-lg shadow-lg border-2 shadow-slate-600 bg-gradient-to-r from-cyan-300 to-blue-300">
        <h2 className="text-2xl font-bold mb-6">Add to Cart</h2>
        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-700"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            min="1"
          />
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateCart;
