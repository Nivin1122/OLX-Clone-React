import React from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    const handle_logout = () =>{
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('is_admin')

        navigate("/login")
    }
  return (
    <div>
        <button onClick={handle_logout}>Logout</button>
    </div>
  )
}

export default Logout