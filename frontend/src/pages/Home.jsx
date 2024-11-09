import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [ products,setProducts ] = useState([]);

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
            <Link to={`/users/prods/${product.id}`}>
                <button>View Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home