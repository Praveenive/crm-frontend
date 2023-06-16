import { Button, TextField } from '@mui/material'
import React from 'react'
import Adminbase from '../../Base/Adminbase.js'


export default function Takeaction() {
  return (
  <Adminbase>
    <h1>Admin Update</h1>
          <TextField label="Total Manager Count" variant="outlined" fullWidth sx={{ m: 1 }}
        type="text"
       
        />
         <TextField label="Total Employee Count" variant="outlined" fullWidth sx={{ m: 1 }}
        type="text"
       
        />
         <TextField label="Total Lead Generated Count" variant="outlined" fullWidth sx={{ m: 1 }}
        type="text"
       
        />
        <Button variant='contained'>Update</Button>
  </Adminbase>
  )
}
