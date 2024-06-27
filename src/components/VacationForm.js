import React, { useState } from 'react';
import axios from 'axios'; 

const VacationForm = () => {
  const [employee, setEmployee] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newVacation = { employee, startDate, endDate };

    axios.post('/api/vacations', newVacation)
      .then(response => {
        console.log('Vacation added successfully:', response.data);
      })
      .catch(error => {
        console.error('Error adding vacation:', error);
      });

    setEmployee('');
    setStartDate('');
    setEndDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Vacation</h2>
      <label>
        Employee:
        <input type="text" value={employee} onChange={(e) => setEmployee(e.target.value)} required />
      </label>
      <br />
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
      </label>
      <br />
      <label>
        End Date:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
      </label>
      <br />
      <button type="submit">Add Vacation</button>
    </form>
  );
};

export default VacationForm;