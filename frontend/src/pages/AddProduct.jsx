import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddProduct() {
    const [p_name,setPname] = useState("")
    const [p_price, setPprice] = useState("")
    const [image,setImage] = useState(null)
    const navigate = useNavigate();

    const handleImageChange = (event) =>{
        const file = event.target.files[0];
        if (file){
            setImage(file)
        }
    }

    const add_all_products = async (e) =>{
        e.preventDefault();

        const formData = new FormData();
        formData.append("product_name",p_name)
        formData.append("images",image)
        formData.append("price",p_price)

        try{
            const response = await axios.post('http://127.0.0.1:8000/adminpanel/add_products/',formData,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log("Product added successfully:", response.data);
            if (response.data){
                navigate("/")
            }
        }catch(error){
            console.error("Error adding product:", error);
        }
    }

  return (
    <div>
        <h1>Add Products</h1>

            <form onSubmit={add_all_products}>
            <label htmlFor="">Product Name</label>
            <input type="text" value={p_name} onChange={(e)=>setPname(e.target.value)} />
            <br />

            <label htmlFor="">Product Image</label>
            <input type='file' onChange={handleImageChange}/>
            <br />

            <label htmlFor="">Product Price</label>
            <input type='text' value={p_price} onChange={(e)=>setPprice(e.target.value)}/>
            <br />

            <button type='submit'>Add Product</button>
        </form>
    </div>
  )
}

export default AddProduct