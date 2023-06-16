import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import Adminbase from '../../Base/Adminbase.js'


export default function Takeaction({managerCount,setManagerCount,employeeCount,genleads,setEmloyeeCount,setGenleads}) {
  const navigate = useNavigate()

  const handleTakeaction = ()=>{
    navigate("/admindashboard")
  }
  return (
  <Adminbase>
    <h1>Admin Update</h1>
          <TextField label="Total Manager Count" variant="outlined" fullWidth sx={{ m: 1 }}
        type="text"
         value={managerCount} onChange={(e)=>setManagerCount(e.target.value)}
        />
         <TextField label="Total Employee Count" variant="outlined" fullWidth sx={{ m: 1 }}
        type="text" value={employeeCount} onChange={(e)=>setEmloyeeCount(e.target.value)}
       
        />
         <TextField label="Total Lead Generated Count" variant="outlined" fullWidth sx={{ m: 1 }}
        type="text" value={genleads} onChange={(e)=>setGenleads(e.target.value)}
       
        />
        <Button variant='contained' onClick={handleTakeaction}>Update</Button>
  </Adminbase>
  )
}
