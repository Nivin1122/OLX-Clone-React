import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Addproduct.css"
import Navbar from '../components/navbar/Navbar';
import Subnavbar from '../components/subnavbar/Subnavbar';

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
    <>
        <Navbar/>
        <Subnavbar/>

    <div className="add-product-container">
        
            <h1 className="add-product-title">Add Product</h1>
            <form className="add-product-form" onSubmit={add_all_products}>
                <label>Product Name</label>
                <input 
                    type="text" 
                    value={p_name} 
                    onChange={(e) => setPname(e.target.value)} 
                    className="form-input"
                    placeholder="Enter product name"
                />

                <label>Product Image</label>
                <input 
                    type="file" 
                    onChange={handleImageChange} 
                    className="form-input"
                />

                <label>Product Price</label>
                <input 
                    type="text" 
                    value={p_price} 
                    onChange={(e) => setPprice(e.target.value)} 
                    className="form-input"
                    placeholder="Enter product price"
                />

                <button type="submit" className="submit-button">Add Product</button>
            </form>
        </div>
        </>

  )
}

export default AddProduct