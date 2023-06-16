import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Homepage() {
    const navigate = useNavigate()
  return (
    <div className='homePage'>
        <h1>Welcome to CRM Application</h1>
      
        <Button variant="contained" onClick={()=>navigate("/login")}>Admin Login</Button>{"  "}
        <Button variant="contained" onClick={()=>navigate("/login")}>Manager Login</Button>{" "}
        <Button variant="contained" onClick={()=>navigate("/login")}>Employee Login</Button>
    </div>
    
  )
}
