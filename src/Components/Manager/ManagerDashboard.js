import ManagerBase from '../../Base/ManagerBase'
import {  Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


export default function ManagerDashboard({employeeCount,genleads,setEmloyeeCount,setGenleads,reqemp,setReqemp,reqleads,setReqleads}) {
const navigate = useNavigate()

  return (
    <ManagerBase>
      <h1>Welcome to ManagerDashboard</h1>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <h3>Total Employees Count:{employeeCount}</h3>
        <h3>Total Leads Generated Count:{genleads}</h3>
        <h3>Requested Employee :{reqemp}</h3>
        <h3>Requested Leads:{reqleads}</h3>
      </CardContent>
      <CardActions>
        <Button variant="contained"  onClick={()=>navigate("/man-takeaction")}>Take Action</Button>
      </CardActions>
    </Card>
    </ManagerBase>
  
       
  
  )
}
