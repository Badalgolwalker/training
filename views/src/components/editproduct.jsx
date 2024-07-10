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
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`http://localhost:3000/product/readsingle/${id}`);
        setProduct(response.data); // Assuming response.data is an object with fields matching your product state
        setLoading(false); // Set loading to false after data is fetched

        console.log(response.data)
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false); // Set loading to false in case of error
      }
    };
    fetchData();
  }, [id]); // Include id in the dependency array for useEffect

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
      const response = await axios.post(`http://localhost:3000/product/update/${id}`, product);
     
      toast.success("product upadte successfullt")
      
      setTimeout(() => {
        navigate("/")
      }, 1500);
      // Optionally, redirect or show a success message
    } catch (error) {
      console.error('Error updating product:', error);
      // Handle error state or display error message
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while waiting for data
  }

  return (
    <div>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productname">Product Name</label>
          <input
            type="text"
            id="productname"
            name="productname"
            value={product.productname}
            onChange={handleChange}
            placeholder={product.productname}

          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="stock">Stock</label>
          <input
            type="text"
            id="stock"
            name="stock"
            value={product.stock}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <input
            type="text"
            id="status"
            name="status"
            value={product.status}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Product</button>
      </form>
      <ToastContainer position="top-center"  />
    </div>
  );
};

export default EditProduct;
