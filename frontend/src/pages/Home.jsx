import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Home() {
  const [ products,setProducts ] = useState([]);

  const product_details = () =>{

  }

  useEffect(()=>{
    axios.get('http://localhost:8000/users/prods/')
      .then((response)=>{
        setProducts(response.data)
      })
      .catch((error)=>{
        console.error('fetch errr',error)
        
      });
  },[])

  return (
    <div>
      <h2>Product List</h2>

      <ul>
        {products.map((product)=>(
          <li key={product.id}>
            <img src={product.images} alt="" />
            <h3>{ product.product_name }</h3>
            <p>{ product.price }</p>
            <button onClick={product_details}>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home