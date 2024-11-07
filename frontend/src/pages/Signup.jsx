import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
        <h2>Signup Page</h2>
        <label htmlFor="">Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/><br />
        <label htmlFor="">Password</label>
        <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)}/><br />
        <button onClick={addUsers}>signup</button>
    </div>
  )
}

export default Signup