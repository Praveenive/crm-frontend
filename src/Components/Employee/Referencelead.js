import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeBase from '../../Base/EmployeeBase'

export default function Referencelead({employeeleads,setEmployeeleads}) {
    const { token } =useParams()
    const [leadname,setLeadname] = useState("")
    const [contactno,setContactno] = useState("")
    const [standard,setStandard] = useState("")
    const [schoolname,setSchoolname] = useState("")
    const [board,setBoard] = useState("")
    const [location,setLocation]= useState("")
    const [parentname,setParentname]= useState("")
    const [request,setRequest] = useState("")
    const navigate = useNavigate()
    const [error,setError] =useState("")

    const generatelead = async()=>{
        const newlead = {
            leadname,contactno,standard,schoolname,board,location,parentname,request
        }
        const response= await fetch(`https://crm-backend-gb9s-praveenive.vercel.app/leads/add`,{
            method:'POST',
            body:JSON.stringify(newlead),
            headers:{
                "x-auth-token":token,
                "Content-type":"application/json"
            }
        })
        const data = await response.json();
        console.log(data)
        if(!data.data){
            setError(data.message)
        }
        setEmployeeleads([...employeeleads,data.data])
        navigate("/employeeleads")
    }
   
  return (
   <EmployeeBase>
    <div>
          <form>
            <h1>Referral Lead Creation Form</h1>
          <TextField label="Leadname" variant="outlined" fullWidth sx={{ m: 1 }}
        value={leadname}
        onChange={(e)=>setLeadname(e.target.value)}
        type="text"/>
        <TextField label="Contactno" variant="outlined" fullWidth sx={{ m: 1 }}
        type="text"
        value={contactno}
        onChange={(e)=>setContactno(e.target.value)}
        />
      
        
             <TextField label="standard" variant="outlined" fullWidth sx={{ m: 1 }}
        type="text"
        value={standard}
        onChange={(e)=>setStandard(e.target.value)}
        />
        <TextField label="School name" variant="outlined" fullWidth sx={{ m: 1 }}
        type="text"
        value={schoolname}
        onChange={(e)=>setSchoolname(e.target.value)}
        />
       <TextField label="Board"  variant="outlined" fullWidth sx={{ m: 1}}
     
        type="text"
        value={board}
        onChange={(e)=>setBoard(e.target.value)}/>
        <TextField label="Location" variant="outlined" fullWidth sx={{ m: 1 }}
        placeholder="Enter the location"
        type="text"
        value={location}
        onChange={(e)=>setLocation(e.target.value)}
        />
         <TextField label="Parent name" variant="outlined" fullWidth sx={{ m: 1 }}
        type="text"
        value={parentname}
        onChange={(e)=>setParentname(e.target.value)}
        />
         <TextField label="Service Request" variant="outlined" fullWidth sx={{ m: 1 }}
        type="text"   inputProps={{sx:{height: 100}}}
        value={request}
        onChange={(e)=>setRequest(e.target.value)}
        />

        <Button
        type="submit"        variant ="contained"
        onClick={generatelead}
        >Generate Lead</Button>
        {error? <Typography>{error}</Typography>:""}
</form></div>
   </EmployeeBase>
  )
}
