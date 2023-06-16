import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function EmployeeDashboard({title, description, children}) {
    const navigate = useNavigate()

async function handleLogout(){
  localStorage.removeItem("token")
  navigate("/login")
}

  return (
    <div className='main-container'>
      <header>
      <nav>
      <AppBar position="static">
  <Toolbar variant="dense">
    <Typography sx={{ mr: 2 }}>  
     CRM Application
    </Typography>
    <IconButton 
    edge="end"
     color="inherit"
     onClick={()=>navigate("/employeedashboard")}
      aria-label="dashboard" sx={{ mr: 2 }}>  
     Dashboard
    </IconButton>

    <IconButton 
    edge="end" 
    color="inherit" 
    aria-label="add students" 
    onClick={()=>navigate("/employeeleads")}
    sx={{ mr: 2 }}>  
      My Leads
    </IconButton>
    <IconButton 
    edge="end" 
    color="inherit" 
    aria-label="add students" 
    onClick={()=>navigate("/login")}
    sx={{ mr: 2 }} onclick={handleLogout}>   
      Logout
    </IconButton>

  </Toolbar>
</AppBar>
        </nav>
      </header>
      <main>
          <h1>{title}</h1> 
          <h4>{description}</h4>
          <div className='contents'>
                {children}
          </div>
      </main>
    </div>
  )
}

