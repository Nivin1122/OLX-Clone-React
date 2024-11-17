import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import olxlogo from '../../src/assets/images/olx-logo.png'
import './signup.css'

function Signup() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();


    const addUsers = async ()=>{
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/signup/',{
                username,
                password,
                
            });
            if (response.status === 201){
                navigate("/");
            }
           
        }catch(error){
            alert(error.response.data.error);
        }
    }

  return (
    <div>
        <div className="signupParentDiv">
            <img width="200px" height="200px" src={olxlogo} alt="Logo" />
            <br />
            <label htmlFor="username">Username</label>
            <br />
            <input
                className="input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                name="username"
                placeholder="Enter your username"
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                placeholder="Enter your password"
            />
            <br />
            <br />
            <button type="submit" onClick={addUsers}>Signup</button>
        </div>
    </div>
  )
}

export default Signup