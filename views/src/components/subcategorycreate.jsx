import axios from 'axios'
import React, { useState } from 'react'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const CategoryCreate = () => {
  const [Subcategoryname, setSubcategoryname] = useState("");
  const [categoryName, setcategoryName] = useState("");

  const subcreateCategory = async () => {
    try {
      const response = await axios.post("http://localhost:3000/Subcategory/subcategory", {
        Subcategoryname,
        categoryName
      });
    if(response){
      toast.success("Subcategory create succcessfully")
    }
    } catch (error) {
     toast.error("Error creating Subcategory:");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Sub Category</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            subcreateCategory();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">SubCategory Name</label>
            <input
              type="text"
              placeholder="Subcategoryname"
              value={Subcategoryname}
              onChange={(e) => setSubcategoryname(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Category Name</label>
            <input
              type="text"
              placeholder="category Name"
              value={categoryName}
              onChange={(e) => setcategoryName(e.target.value)}
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
