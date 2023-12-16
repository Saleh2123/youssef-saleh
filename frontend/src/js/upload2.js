import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import axios from 'axios';
import {useParams} from"react-router-dom"
export default function Upload2({user}) {
  const [form1, setForm1] = useState(null);
  const [form2, setForm2] = useState(null);
  const [form3, setForm3] = useState(null);
const {id}=useParams();
  const handleFile1Change = (e) => {
    setForm1(e.target.files[0]);
  };

  const handleFile2Change = (e) => {
    setForm2(e.target.files[0]);
  };

  const handleFile3Change = (e) => {
    setForm3(e.target.files[0]);
  };

  const submit = async () => {
    const finalForm = new FormData();
    finalForm.append('file1', form1);
    finalForm.append('file2', form2);
    finalForm.append('file3', form3);
    finalForm.append("/title",user);
    try {
      await axios.post('http://localhost:5000/upload2', finalForm);
      window.location = '/';
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <Container
      sx={{
        backgroundColor: 'lightblue',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        gap: '16px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          padding: '16px',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <label style={{ color: 'white', fontSize: '2rem' }}>ID</label>
          <TextField type="file" onChange={handleFile1Change} required />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <label style={{ color: 'white', fontSize: '2rem' }}>Medical License</label>
          <TextField type="file" onChange={handleFile2Change}  required/>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <label style={{ color: 'white', fontSize: '2rem' }}>Medical Degree</label>
          <TextField type="file" onChange={handleFile3Change} required />
        </Box>
        <Button style={{visibility:'hidden'}} id="upload"variant="contained" onClick={submit}>
          Upload
        </Button>
      </Box>
    </Container>
  );
}
