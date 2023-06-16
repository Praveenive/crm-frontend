import { Autocomplete, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import EmployeeBase from '../../Base/EmployeeBase'

const leadstatusmui = ["New", "Contacted", "Qualified", "Lost", "Cancelled", "Confirmed"];

export default function Updatelead() {
  const {token,id} =useParams()
  const [leadstatus,setLeadStatus] = useState("")
  const navigate = useNavigate()
  const updatedlead =async()=>{
    const updated ={leadstatus}
    const res = await fetch(`https://crm-backend-gb9s-praveenive.vercel.app/leads/edit/${id}`,{
      method:"PUT",
      body:JSON.stringify(updated),
      headers:{
        "Content-type":"application/json",
        "x-auth-token":token
      }
    })
    const data = await res.json();
    console.log(data)
    
    navigate("/employeeleads")
  }
  return (
    <EmployeeBase>
      <h1>Updated Lead status</h1>
      <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={leadstatusmui}
  value={leadstatus}
  onChange={(event, newValue) => setLeadStatus(newValue)}
  renderInput={(params) => <TextField {...params} label="Lead Status" />}
/>


  <br/><br/>
        <Button variant="contained" onClick={updatedlead}>Update</Button>
    </EmployeeBase>
  )
}
