import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

const readallproduct = () => {
const [products, setproducts] = useState([])
const navigate = useNavigate()

  useEffect(() => {
    
  const fetchdata = async() =>{
    const response = await axios.get("http://localhost:3000/product/read")
  setproducts(response.data)
  }
  fetchdata()
  
  }, [])

  const deletepr = async(e) =>{
    const deletepro = await axios.get(`http://localhost:3000/product/delete/${e}`)
     navigate("/")

  }
  return (



    <div className='flex m-3 gap-5 flex-wrap mt-2'>
      

        {products.map((product) => (
         
        
        <div key={product._id} className='w-80 h-96 bg-red-200 flex-col'>
          <img className='w-80 h-82 bg-red-200' src="https://imgs.search.brave.com/lSKDyL8uYK3EIp7wKKFiqwohHpnD3uCHSdtXZU15NaU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zdW1tZXItYWkt/Z2VuZXJhdGVkLWlt/Z2VfODU2NDA1LTE5/NDAuanBnP3NpemU9/NjI2JmV4dD1qcGc" alt="" />
        <footer className='w-80 h-44 bg-red-500'>
        <h2>name : {product.name}</h2>

          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <p>Stock: {product.stock}</p>
          <p>Status: {product.status}</p>
      
          <Link to={`/editproduct/${product._id}`}>Edit</Link>
     <button onClick={() =>deletepr(product._id)}>Delete</button>

        </footer>
          
       
        </div>
      ))}
    
    </div>
  )
}

export default readallproduct