import { Paper, Typography,Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Adminbase from '../../Base/Adminbase'

export default function Managerlist() {
    const [manager,setManager] = useState([])
    const navigate = useNavigate()
    const [error,setError] = useState("")
    const [tokencopy,setTokencopy] = useState("")
    useEffect(()=>{
        if(!localStorage.getItem("token")){
            navigate("/login",{replace:true})
        }
        let token = localStorage.getItem("token");
        setTokencopy(token)
      async function fetchAllManager() {
            const response = await fetch(`https://crm-backend-fnei-praveenive.vercel.app/emp/allmanager`, {
                method: "GET",
                headers: {
                    "x-auth-token": tokencopy
                }
            })
            const data = await response.json()
            if (!data.data) {
                setError(data.message)
            }
            setManager(data.data)
            setError("")

        }
    
    fetchAllManager()
    },[])


  return (
    <Adminbase>
       {manager&& (
            <div>
                {manager?.map((data,idx)=>(
                    <Paper
                    elevation={6}
                    key ={data._id}>
                        <h3>Firstname:{data.firstname}</h3>
                        <p>lastname:{data.lastname}</p>
                        <p>Email Id:{data.email}</p>
                        <p>Role:{data.type_of_user}</p>
                        <h4>Manager Status:</h4>
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
