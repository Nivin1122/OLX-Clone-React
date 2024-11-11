import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Subnavbar from '../components/subnavbar/Subnavbar';

function Home() {
  const [ products,setProducts ] = useState([]);
  const [isAdmin,setIsAdmin] = useState(false)
  const navigate = useNavigate();

  useEffect(()=>{

    const adninStatus = localStorage.getItem('is_admin') === 'true';
    setIsAdmin(adninStatus);
    
    axios.get('http://localhost:8000/users/prods/')
      .then((response)=>{
        setProducts(response.data)
      })
      .catch((error)=>{
        console.error('fetch errr',error)
        
      });
  },[])

  const handle_logout = () =>{
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('is_admin')

    navigate("/login")
  }

  return (
    
    <div>
      <Navbar />
      <Subnavbar/>

      {isAdmin && (
        <div>
          <Link to='/ad_products'>
              <button>Add Product</button>
          </Link>
          
        </div>
        
      )}
      
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
        <div>
          <button onClick={handle_logout}>Logout</button>
        </div>
      
    </div>
  )
}

export default Home