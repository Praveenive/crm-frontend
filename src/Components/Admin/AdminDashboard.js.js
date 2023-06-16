import Adminbase from '../../Base/Adminbase'
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


export default function AdminDashboard({managerCount,setManagerCount,employeeCount,genleads,setEmloyeeCount,setGenleads,reqemp,setReqemp,reqleads,setReqleads}) {
const navigate = useNavigate()


  return (
    <Adminbase>
      <h1>Hello PRAVEEN</h1>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <h3>Total Mangers Count :{managerCount}</h3>
        <h3>Total Employees Count:{employeeCount}</h3>
        <h3>Total Leads Generated Count:{genleads}</h3>
        <h3>Requested Employee By Manager :{reqemp}</h3>
        <h3>Requested Leads Our Team :{reqleads}</h3>
      </CardContent>
      <CardActions>
        <Button variant="contained"  onClick={()=>navigate("/takeaction")}>Take Action</Button>
      </CardActions>
    </Card>
  
       
    </Adminbase>
  )
}
