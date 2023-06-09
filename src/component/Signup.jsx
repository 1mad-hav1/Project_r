import { Box, TextField, Button } from '@mui/material'
import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [cpassword, setCPass] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();
    const [field1, setField1] = useState('');
    const [field2, setField2] = useState('');
    const [field3, setField3] = useState('');
  const EmailChange = (e) => {
    setField1(e.target.value);
    setEmail(e.target.value);
  };

  const Pass1Change = (event) => {
    setField2(event.target.value);
    setPass(event.target.value);

  };
  const Pass2Change = (event1) => {
    setField3(event1.target.value);
    setCPass(event1.target.value);

  };


    const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (field1.trim() === '' || field2.trim() === '' || field3.trim() === '') {
      alert('Please fill in all required fields.');
    } 
    else {
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
        }
        else{
             if (isChecked) {
                if (password !== cpassword) {
                     alert('Password and confirm password must match.');
                 }
                else{
                    alert('Thank you for signing up!');
                    navigate('/Sign');
                }
    
            } 
            else {
                alert('Please accept terms and conditions');
            }
        }
  };
  }
      const handleOpenModal = () => {
        setModalOpen(true);
      };
      
      const handleCloseModal = () => {
        setModalOpen(false);
      };
   
    
    
  return (
    <div>
        <div style={{ textAlign: 'center'}}>
            <h1 style={{ color: 'white' }}>The Invincibles</h1>
        </div>
        <Box border={1} borderColor="primary.main" borderRadius={5} padding={6} sx={{  width: '500px' ,backgroundColor: 'rgba(135, 206, 235)',color: '#000000'}}>
        
            <h2>Sign Up</h2>
            <div style={{ display: 'flex', gap: '65px' }}>
            <br/><p>Email id</p>
            <TextField variant='filled' type='text' value={email} onChange={EmailChange}></TextField>
            </div>
            <div style={{ display: 'flex', gap: '60px' }}>
            <br/><br/><p>Password</p>
            <TextField variant='filled' type='password' style={{ height: '30px' }} value={password} onChange={Pass1Change} required></TextField>
            </div>
            <div style={{ display: 'flex', gap: '30px' }}>
            <br/><br/><br/><br/><p>Confirm Password</p>
            <TextField variant='filled' type='password' style={{ height: '30px' }} value={cpassword} onChange={Pass2Change} required></TextField>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' ,gap:'10px'}}>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
            <label>I agree to the    </label><span onClick={handleOpenModal} style={{ color: 'blue' , cursor: 'pointer'}}> Terms and Conditions</span>
            <Modal isOpen={modalOpen} onRequestClose={handleCloseModal} contentLabel="Terms and Conditions" style={{overlay: {backgroundColor: 'rgba(0, 0, 0, 0.5)',},content: {backgroundColor: 'transparent',color:'white',maxWidth: '400px',width: '50%',height: '50%',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',},}}>
              <h2>Terms and Conditions</h2>
              {"If book is not returned or damaged, fine will be charged."}
              <br/><br/><br/>
              <div style={{ marginTop:'auto' , textAlign: 'center' }}>
              <Button variant='filled' onClick={handleCloseModal}>Close</Button>
              </div>
            </Modal>
            </div>
            <br/> <br/>
            <div style={{ display: 'flex', justifyContent: 'center', gap : 2}}>  
                <Button variant='contained' color='success' onClick={handleSubmit} style={{ textDecoration: 'none', color: 'white', backgroundColor: 'success', border: 'none', outline: 'none', cursor: 'pointer'}}>Submit</Button>  
            </div>   
            </Box>
         </div>
  )
}

export default Signup