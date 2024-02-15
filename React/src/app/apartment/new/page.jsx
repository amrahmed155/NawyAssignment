"use client"
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import Layout from"../../layout/main"
import axios from 'axios';

const ApartmentForm = () => {
  const [formDetails, setformDetails] = useState({name:null,description:null,price:null});
  
  const handleChange = (event) => {
    console.log(formDetails);
    event.persist();
    setformDetails({ ...formDetails, [event.target.id]: event.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3000/apartments', formDetails);
      console.log(response.data); // Handle response accordingly
      setformDetails({name:null,description:null,price:null})
    } catch (error) {
      console.error('Error submitting the form:', error);
    }

    // Handle form submission logic here, e.g., sending data to backend
  };
  
  return (
    <Layout>
    <h1 style={{fontSize:'25px',fontWeight:'bolder'}}>Add Apartment Listing</h1>
     <form onSubmit={handleSubmit}>
      <Box sx={{ '& > :not(style)': { marginBottom: 2 } }}>
        <TextField
          fullWidth
          id="name"
          label="Name"
          variant="outlined"
          value={formDetails.name}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          id="description"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          value={formDetails.description}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          id="price"
          label="Price"
          type="number"
          variant="outlined"
          value={formDetails.price}
          onChange={handleChange}
          required
        />
      </Box>
      <Button  variant="contained" type="submit" color="primary">
        Submit
      </Button>
    </form>
    </Layout>
  );
};

export default ApartmentForm;
