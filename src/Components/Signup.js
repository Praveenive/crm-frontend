import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const navigate = useNavigate()
  return (
    <div className='loginpage'>
    <h4>CRM Application</h4> 
    <h5>Welcome</h5>
    <p>Please enter your  details</p>
    <TextField id="firstname" label="Enter your First name" variant="filled" /><br/><br/>
    <TextField id="lastname" label="Enter your Last name" variant="filled" /><br/><br/>
    <TextField id="email" label="Enter your email" variant="filled" /><br/><br/>
    <TextField id="password" label="Enter Password" variant="filled" />  <br/><br/>
    <Button variant="contained" >Signup</Button>
    <p>Already have employee account?</p>
    <Button variant="text"  onClick={()=>navigate("/login")}>Login</Button>
    </div>
  )
}
