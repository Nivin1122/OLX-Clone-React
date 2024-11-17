import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Login.css";
import olxlogo from '../../src/assets/images/olx-logo.png'


function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignupNavigation = ()=>{
        navigate("/signup")
    }

    const addloginusers = async () => {
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/login/',{
                username,
                password,
            });
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            localStorage.setItem('is_admin',response.data.is_admin);
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
        <div className="loginParentDiv">
            <img width="200px" height="200px" src={olxlogo} alt="Logo" />
            <br />
            {/* <form onSubmit={addloginusers}> */}
                <label htmlFor="email">username</label>
                <br />
                <input
                    className="input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    id="name"
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
                <button type="submit" onClick={addloginusers}>Login</button>
            {/* </form> */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                >
                <span
                onClick={handleSignupNavigation}
                style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
                >
                    Signup
                </span>
                </div>
        </div>
    </div>
  )
}

export default Login