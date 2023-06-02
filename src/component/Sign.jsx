import { Box, TextField, Button } from '@mui/material'
import React from 'react'

const Sign = () => {
  return (
    <div>
        <div style={{ textAlign: 'center'}}>
            <h1 style={{ color: 'white' }}>The Invincibles</h1>
        </div>
        <Box border={1} borderColor="primary.main" borderRadius={5} padding={6} sx={{  width: '500px' ,backgroundColor: 'rgba(135, 206, 235)',color: '#000000'}}>
        
            <h2>Sign Up</h2>
            <div style={{ display: 'flex', gap: '50px' }}>
            <br/><p>Name</p>
            <TextField variant='filled' type='text'></TextField>
            </div>
            <div style={{ display: 'flex', gap: '52px' }}>
            <br/><p>Place</p>
            <TextField variant='filled' type='text'></TextField>
            </div>
            <div style={{ display: 'flex', gap: '57px' }}>
            <br/><p>Age</p>
            <TextField variant='filled' type='number'></TextField>
            </div>
            <div style={{ display: 'flex', gap: '42px' }}>
            <br/><p>Email id</p>
            <TextField variant='filled' type='email'></TextField>
            </div>
            <div style={{ display: 'flex', gap: '35px' }}>
            <br/><p>Education</p>
            <TextField variant='filled' type='text'></TextField>
            </div>
            <div style={{ display: 'flex', gap: '26px' }}>
            <br/><p>Date of Birth</p>
            <TextField variant='filled' type='date'></TextField>
            </div>
            <div style={{ display: 'flex', gap: '35px' }}>
            <br/><p>Phone no.</p>
            <TextField variant='filled' type='number'></TextField>
            </div>
            <br/><br/>
            <div style={{ display: 'flex', justifyContent: 'center', gap : 4}}>
                
                <Button variant='contained' color='success'>Submit</Button>
                <Button variant='contained' color='warning'>Reset</Button>
            </div>
        </Box>
    </div>
  )
}

export default Sign