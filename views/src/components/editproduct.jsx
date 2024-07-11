import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    productname: '',
    price: '',
    description: '',
    stock: '',
    status: ''
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`http://localhost:3000/product/readsingle/${id}`);
        setProduct({
          productname: response.data.name || '', // Ensure ke response me name field properly map ho
          price: response.data.price || '',
          description: response.data.description || '',
          stock: response.data.stock || '',
          status: response.data.status || ''
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/product/update/${id}`, product);
      toast.success("Product updated successfully");

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="productname" className="block text-gray-700">Product Name</label>
          <input
            type="text"
            id="productname"
            name="productname"
            value={product.productname} // Corrected to productname
            onChange={handleChange}
            placeholder="Enter product name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Enter product price"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Enter product description"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="stock" className="block text-gray-700">Stock</label>
          <input
            type="text"
            id="stock"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            placeholder="Enter product stock"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-gray-700">Status</label>
          <input
            type="text"
            id="status"
            name="status"
            value={product.status}
            onChange={handleChange}
            placeholder="Enter product status"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Update Product
        </button>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default EditProduct;
