import { Button, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword]= useState("")
  const [error,setError] = useState("")
  const navigate = useNavigate()
  const handleLogin = async()=>{
    const loginDetails={email,password}
    const response = await fetch(`https://crm-backend-gb9s-praveenive.vercel.app/user/login`,{
      method:"POST",
      body:JSON.stringify(loginDetails),
      headers:{
        "Content-type":"application/json"
      }
    })
    const data = await response.json();
console.log(data);

if (!data.token) {
  setError(data.data);
} else {
  const role = data.role;

  if (role === "admin") {
    setError("");
    localStorage.setItem("token", data.token);
    navigate("/admindashboard");
  } else if (role === "manager") {
    setError("");
    localStorage.setItem("token", data.token);
    navigate("/managerdashboard");
  } else if (role === "employee") {
    setError("");
    localStorage.setItem("token", data.token);
    navigate("/employeedashboard");
  }
}

  }
  return (
    <div className='loginpage'>
      <h4>CRM Application</h4> 
      <h5>Welcome</h5>
      <p>Please enter your login details</p>
  
      <TextField id="email" label="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}  variant="filled" /><br/><br/>
      <TextField id="password" label="Enter Password" variant="filled" value={password} onChange={(e)=>setPassword(e.target.value)}/>  <br/><br/>
      <Button variant="contained" onClick={handleLogin}>Login</Button>
      <p>Don't have an Employee account yet?</p>
      <Button variant="text" onClick={()=>navigate("/signup")}>Signup</Button>
      {error ? <Typography color={"danger"}>
           {error}
        </Typography> : "" }
      

    </div>
  )
}
