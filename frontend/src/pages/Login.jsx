import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const addloginusers = async () => {
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/login/',{
                username,
                password,
            });
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            alert("Logged in successfully");
            if (response.status === 200){
                navigate("/")
            }

        }catch(error){
            alert("invalid cred")
        }
    }

  return (
    <div>
        <h2>Login Page</h2>
        <label htmlFor="">Username</label>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/><br />
        <label htmlFor="">Password</label>
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
        <button type='submit' onClick={addloginusers}>Login</button>
    </div>
  )
}

export default Login