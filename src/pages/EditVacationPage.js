import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { updateVacation, fetchVacationById } from '../api/api'; 
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const EditVacationPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const fetchVacation = async () => {
      try {
        const vacation = await fetchVacationById(id);
        setName(vacation.name);
        setStartDate(vacation.startDate);
        setEndDate(vacation.endDate);
      } catch (error) {
        console.error('Error fetching vacation:', error);
      }
    };

    fetchVacation();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedVacation = { name, startDate, endDate };
      await updateVacation(id, updatedVacation);
      history.push('/');
    } catch (error) {
      console.error('Error updating vacation:', error);
    }
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Edit Vacation
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
            Update Vacation
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default EditVacationPage;
