import { Paper, Typography ,Button} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeBase from '../../Base/EmployeeBase'

export default function Myleads({employeeleads,setEmployeeleads}) {
    
    const navigate = useNavigate()
    const [error,setError] = useState("")
    
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/login",{replace:true})
        }
        let token = localStorage.getItem("token");
        const fetchEmployeeLeads = async()=>{
           let params = {
                "id": localStorage.getItem("id")
             };
             let url = `https://crm-backend-opgx-praveenive.vercel.app/leads/myleads`;
             url.search = new URLSearchParams(params).toString();
            const response = await fetch(url,
            {
                method:"GET",
                headers:{
                    "x-auth-token":token
                }
            })
            const data = await response.json();
            console.log(data);
            if(!data.data){
                setError(data.message)
            }
            setError("")
            setEmployeeleads(data.data)
        }
      fetchEmployeeLeads()
    },[])
  return (
    <EmployeeBase>
       <div className='ref'> <Button variant="contained" onClick={()=>navigate(`/add/${tokencopy}`)}>
        Referral Lead</Button></div>
    {employeeleads&& (
            <div>
                {employeeleads?.map((data,idx)=>(
                    <Paper
                    elevation={6}
                    key ={data._id}>
                        <p>Leadname:{data.leadname}</p>
                        <p>Contactno:{data.contactno}</p>
                        <p>Standard:{data.standard}</p>
                        <p>Board:{data.board}</p>
                        <p>Location:{data.location}</p>
                        <p>Lead Generated Date:{data.date}</p>
                        <p>Parentname:{data.parentname}</p>
                        <p>Service Request :{data.request}</p>
                        <p>Assigned to :{data.assignedto}</p>
                        <h2>Lead status:{data.leadstatus}</h2>
                        <Button variant="contained"  onClick={()=>navigate(`/edit/${data._id}/${tokencopy}`)}>Update Lead status</Button>
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
