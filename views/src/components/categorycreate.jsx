import axios from 'axios'
import React, { useState } from 'react'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const CategoryCreate = () => {
  const [categoryName, setCategoryName] = useState("");

  const createCategory = async () => {
    try {
      const response = await axios.post("http://localhost:3000/category/create", {
        categoryName
      });
    if(response){
      toast.success("category create succcessfully")
    }
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Category</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createCategory();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Category Name</label>
            <input
              type="text"
              placeholder="Category Name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer position="top-center"  />
    </div>
  );
}

export default CategoryCreate;
