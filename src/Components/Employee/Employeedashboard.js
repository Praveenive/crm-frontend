import { Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeBase from '../../Base/EmployeeBase'

export default function Employeedashboard() {
    const [leads,setLeads] = useState([])
    const [error,setError] = useState("")
    const navigate = useNavigate()
    useEffect(()=>{
      if(!localStorage.getItem("token")){
        navigate("/login",{replace:true})
      }
      let token  = localStorage.getItem("token");
      const fetchallData = async()=>{
        const response = await fetch(`https://crm-backend-praveenive.vercel.app/leads/allleads`,{
            method:"GET",
            headers:{
                "x-auth-token":token
            }

        });
        const data = await response.json();
        if(!data.data){
            setError(data.message)
        }
        setLeads(data.data)
        console.log(leads)
      }
      fetchallData()
    },[])
  return (
    <EmployeeBase>
        {leads&& (
            <div>
                {leads?.map((data,idx)=>(
                    <Paper
                    elevation={6}
                    key ={data._id}>
                        <h3>Leadname:{data.leadname}</h3>
                        <p>Contactno:{data.contactno}</p>
                        <p>Standard:{data.standard}</p>
                        <p>Board:{data.board}</p>
                        <p>Location:{data.location}</p>
                        <p>Lead Generated Date:{data.date}</p>
                        <p>Parentname:{data.parentname}</p>
                        <p>Service Request :{data.request}</p>
                        <p>Assigned to :{data.assignedto}</p>
                    </Paper>
                ))}
            </div>
        )}
         {error? 
        <Typography color={"danger"}>
           {error}
        </Typography> : "" }
    </EmployeeBase>
  )
}
