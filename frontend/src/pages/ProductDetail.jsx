import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
    const { p_id } = useParams();
    const [product,setProduct] = useState(null);

    useEffect(()=>{
        const getspecificProduct = async () =>{
            try{
                const response = await axios.get(`http://127.0.0.1:8000/users/prods/${p_id}/`);
                setProduct(response.data)
            }catch(error){
                console.error("fetching error",error);
            }
            
        };
        getspecificProduct();
    },[p_id]);

  return (
    <div>
        
         {product ? (
            
            <>
                <h1>Name: {product.product_name}</h1>
                <img src={`http://localhost:8000${product.image_url}`} alt={product.product_name} />
                <p>Price: {product.price}</p>
            </>
        ) : (
            <p>Loading product details...</p>
        )}
        
    </div>
  )
}

export default ProductDetail