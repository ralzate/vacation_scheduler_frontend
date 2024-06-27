import React, { useState } from 'react';

const AddVacation = () => {
  const [employeeFullName, setEmployeeFullName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    try {
      const response = await fetch('http://localhost:3001/api/v1/vacations', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ employee_full_name: employeeFullName, start_date: startDate, end_date: endDate })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log('Vacation created successfully!');
    } catch (error) {
      console.error('Error creating vacation:', error.message);
    }
  };

  return (
    <div>
      <h1>Add Vacation</h1>
      <form onSubmit={handleSubmit}>
        <label>Employee Full Name:</label>
        <input type="text" value={employeeFullName} onChange={(e) => setEmployeeFullName(e.target.value)} required />

        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />

        <label>End Date:</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />

        <button type="submit">Create Vacation</button>
      </form>
    </div>
  );
};

export default AddVacation;