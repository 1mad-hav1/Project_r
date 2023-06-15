import { Box, TextField, Button } from '@mui/material'
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const Sign = () => {
  
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [age, setAge] = useState('');
  const [uname, setUname] = useState('');
  const [education, setEducation] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [resetClicked, setResetClicked] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Details are uploaded');
  };

  const handleReset = () => {
    // setShowTerms(false);
    setResetClicked(true);
    setName('');
    setPlace('');
    setAge('');
    setUname('');
    setEducation('');
    setDob('');
    setPhone('');
    setTimeout(() => {
      setResetClicked(false);
    }, 5000);
  };
  
  return (
    <div className='sign'>
        <div style={{ textAlign: 'center'}}>
            <h1 style={{ color: 'white' }}>The Invincibles</h1>
        </div>
        <Box border={1} borderColor="primary.main" borderRadius={5} padding={6} sx={{  width: '500px' ,backgroundColor: 'rgba(135, 206, 235)',color: '#000000'}}>
        
            <h2>Sign Up</h2>
            <div style={{ display: 'flex', gap: '50px' }}>
            <br/><p>Name</p>
            <TextField variant='filled' type='text' value={name} onChange={(e) => setName(e.target.value)} required></TextField>
            </div>
            <div style={{ display: 'flex', gap: '35px' }}>
            <br/><p>Username</p>
            <TextField variant='filled' type='text' value={uname} onChange={(e) => setUname(e.target.value)} required></TextField>
            </div>
            <div style={{ display: 'flex', gap: '52px' }}>
            <br/><p>Place</p>
            <TextField variant='filled' type='text' style={{ height: '30px' }} value={place} onChange={(e) => setPlace(e.target.value)}></TextField>
            </div>
            <div style={{ display: 'flex', gap: '57px' }}>
            <br/><p>Age</p>
            <TextField variant='filled' type='number' value={age} onChange={(e) => setAge(e.target.value)} required></TextField>
            </div>
            <div style={{ display: 'flex', gap: '35px' }}>
            <br/><p>Education</p>
            <TextField variant='filled' type='text' value={education} onChange={(e) => setEducation(e.target.value)}></TextField>
            </div>
            <div style={{ display: 'flex', gap: '26px' }}>
            <br/><p>Date of Birth</p>
            <TextField style={{ width: '219px' }} variant='filled' type='date' value={dob} onChange={(e) => setDob(e.target.value)} required></TextField>
            </div>
            <div style={{ display: 'flex', gap: '35px' }}>
            <br/><p>Phone no.</p>
            <TextField variant='filled' type='number' value={phone} onChange={(e) => setPhone(e.target.value)} required></TextField>
            </div>
            <br/><br/>
            {/* <div style={{ display: 'flex', justifyContent: 'center' ,gap:'10px'}}>
            <input type="checkbox" checked={showTerms} onChange={(e) => handleShowTerms(e.target.checked)}/>
            <label>I agree to the    </label><span onClick={handleOpenModal} style={{ color: 'blue' , cursor: 'pointer'}}> Terms and Conditions</span>
            <Modal isOpen={modalOpen} onRequestClose={handleCloseModal} contentLabel="Terms and Conditions" style={{overlay: {backgroundColor: 'rgba(0, 0, 0, 0.5)',},content: {backgroundColor: 'transparent',color:'white',maxWidth: '400px',width: '50%',height: '50%',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',},}}>
              <h2>Terms and Conditions</h2>
              {"If book is not returned or damaged, fine will be charged."}
              <br/><br/><br/>
              <div style={{ marginTop:'auto' , textAlign: 'center' }}>
              <Button variant='filled' onClick={handleCloseModal}>Close</Button>
              </div>
            </Modal>
            </div> */}
            <br/> <br/>
            <div style={{ display: 'flex', justifyContent: 'center', gap : 2}}>  
                <Button variant='contained' color='success' onClick={handleSubmit} style={{ textDecoration: 'none', color: 'white', backgroundColor: 'success', border: 'none', outline: 'none', cursor: 'pointer'}}><Link to='/'>Submit</Link></Button>
                <Button variant='contained' color='warning' onClick={handleReset}>Reset</Button>  
            </div>
        </Box>
    </div>
  )
}

export default Sign