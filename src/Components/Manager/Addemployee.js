
import { TextField,Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ManagerBase from '../../Base/ManagerBase.js'



export default function Addemployee() {
const [firstname,setFirstname] = useState("")
const [lastname,setLastname]= useState("")
const [email,setEmail] = useState("")
const [password,setPassword]= useState("")
const [ tokencopy,setTokencopy]= useState("")
const [error,setError] = useState("")
const navigate =useNavigate("")
useEffect(()=>{
    if(!localStorage.getItem("token")){
        navigate("/login",{replace:true})
    }
    let token = localStorage.getItem("token");
    setTokencopy(token)
})

const employeeadding = async()=>{
    const newemp = {firstname,lastname,email,password}
    const res = await fetch(`https://crm-backend-gb9s-praveenive.vercel.app/emp/addemployee`,{
        method:"POST",
        body:JSON.stringify(newemp),
        headers:{
            "Content-type":"application/json",
            "x-auth-token":tokencopy
        }
    })
    const data  = await res.json();
    if(!data.data){
      setError(data.message)
    }
    setError("")
    navigate("/man-employeelist")
}

return (
   <ManagerBase>
    <h1>Employee Creation Form</h1>
    <TextField label="firstname" variant="outlined" fullWidth sx={{ m: 1 }}
        value={firstname}
        onChange={(e)=>setFirstname(e.target.value)}
        type="text"/>
        <TextField label="lastname" variant="outlined" fullWidth sx={{ m: 1 }}
        value={lastname}
        onChange={(e)=>setLastname(e.target.value)}
        type="text"/>
        <TextField label="email" variant="outlined" fullWidth sx={{ m: 1 }}
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        type="text"/>
        <TextField label="password" variant="outlined" fullWidth sx={{ m: 1 }}
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        type="text"/>
        <Button variant="contained" onClick={employeeadding}>Add Employee</Button>
        {error?<Typography>{error}</Typography>:" "}
   </ManagerBase>
  )
}
