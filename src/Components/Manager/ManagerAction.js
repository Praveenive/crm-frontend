import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate, } from 'react-router-dom'
import ManagerBase from '../../Base/ManagerBase'

export default function ManagerAction({reqemp,setReqemp,reqleads,setReqleads}) {
    const navigate = useNavigate()
  return (
   <ManagerBase>
    <h1>Manager Action</h1>
    <TextField label="Request employee" variant="outlined" fullWidth sx={{ m: 1 }}
        type="text"
         value={reqemp} onChange={(e)=>setReqemp(e.target.value)}/>
         <TextField label="Total Manager Count" variant="outlined" fullWidth sx={{ m: 1 }}
        type="text"
         value={reqleads} onChange={(e)=>setReqleads(e.target.value)}/>
         <Button variant='contained' onClick={()=>navigate("/managerdashboard")} >Submit</Button>
   </ManagerBase>
  )
}
