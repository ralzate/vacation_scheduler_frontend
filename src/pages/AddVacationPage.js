import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addVacation } from '../api/api';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const AddVacationPage = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newVacation = { name, startDate, endDate };
      await addVacation(newVacation);
      history.push('/');
    } catch (error) {
      console.error('Error adding vacation:', error);
    }
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Add Vacation
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            label="Start Date"
            type="date"
            variant="outlined"
            fullWidth
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            label="End Date"
            type="date"
            variant="outlined"
            fullWidth
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Add Vacation
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AddVacationPage;
