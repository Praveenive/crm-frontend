import { Paper, Typography,Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Adminbase from '../../Base/Adminbase'

export default function EmployeeList() {
    const [employee,setEmployee] = useState([])
    const navigate = useNavigate()
    const [error,setError] = useState("")
    const [tokencopy,setTokencopy] = useState("")
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/login",{replace:true})
        }
        let token = localStorage.getItem("token");
        setTokencopy(token)
      const fetchAllemployee = async()=>{
        const  response = await fetch(`https://crm-backend-fnei-praveenive.vercel.app/emp/allemployee`,{
            method:"GET",
            headers:{
                "x-auth-token":tokencopy
            }
        })
        const data = await response.json();
        if(!data.data){
            setError(data.message)
        }
        setEmployee(data.data)
        console.log(employee)
        setError("")

      }
    
    fetchAllemployee()
    },[])


  return (
    <Adminbase>
      <div className='ref'>  <Button variant='contained' onClick={()=>navigate("/addemployee")}>Add Employee</Button></div>
       {employee&& (
            <div>
                {employee?.map((data,idx)=>(
                    <Paper
                    elevation={6}
                    key ={data._id}>
                        <h3>Firstname:{data.firstname}</h3>
                        <p>lastname:{data.lastname}</p>
                        <p>Email Id:{data.email}</p>
                        <p>Role:{data.type_of_user}</p>
                        <h4>Employee Status:</h4>
            <Button variant="contained">Take Action</Button>
                    </Paper>
                ))}
            </div>
        )}
         {error? 
        <Typography color={"danger"}>
           {error}
        </Typography> : "" }
    </Adminbase>
  )
}
