import React from 'react'
import { Box , Button, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Login = () => {
  
  return (
    <div>
        <h1 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Welcome to The Invincibles</h1>
        <Box border={1} borderColor="primary.main" borderRadius={5} padding={8} sx={{ backgroundColor: 'rgba(135, 206, 235)',color: '#000000'}}>   
        <h2>Login</h2>
        <TextField variant='filled' label="Username" sx={{ width: '400px' }}></TextField>
        <br/><br/>
        <TextField variant='filled' type='password' label="Password" sx={{ width: '400px' }}></TextField>
        <br/><br/>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap : 4}}>
        <Button id="bt" variant='contained' color='success'>Submit</Button>
        <Button id="bt" variant='contained' color='warning'>Reset</Button>
        </div>
        <br/>
        <div style={{ textAlign: 'right' }}>
                  <Typography>Forgot password?</Typography>
        </div>
        <div style={{ textAlign: 'left' }}>
                  <Typography>Don't have an account?<Link to="/Sign">Sign Up</Link></Typography>
                  
        </div>
        </Box>
    </div>
  )
}
export default Login