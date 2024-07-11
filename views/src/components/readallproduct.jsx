import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const ReadAllProduct = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/product/read");
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/product/delete/${id}`);
      navigate("/");
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

 

  return (
    <div className='flex m-3 gap-5 flex-wrap mt-2'>
      {products.map((product) => (
        <div key={product._id} className='w-80 h-96 bg-red-200 flex-col'>
          {product.image ? (
            <img
            className="w-80 h-82 bg-red-200"
            src={`data:image/jpeg;base64,${btoa(
              new Uint8Array(product.image.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ''
              )
            )}`}
            alt="Product Image"
          />
          ) : (
            <div className="w-80 h-82 bg-gray-200 flex items-center justify-center">
              No Image Available
            </div>
          )}

          <footer className='w-80 h-44 bg-red-500'>
            <h2>Name: {product.name}</h2>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p>Stock: {product.stock}</p>
            <p>Status: {product.status}</p>
            <div className=' flex justify-between'>
            <Link to={`/editproduct/${product._id}`}>Edit</Link>
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
            
            <Link to={`/cartpage/${product._id}`}>Addtocart</Link>
            </div>
          </footer>
        </div>
      ))}
    </div>
  );
};

export default ReadAllProduct;
