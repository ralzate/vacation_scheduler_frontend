import React, { useState } from 'react';
import './VacationForm.css'; 

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
      setEmployeeFullName('');
      setStartDate('');
      setEndDate('');

    } catch (error) {
      console.error('Error creating vacation:', error.message);
    }
  };

  return (
    <div className="add-vacation-container">
      <h1>Add Vacation</h1>
      <form onSubmit={handleSubmit} className="add-vacation-form">
        <div className="form-group">
          <label htmlFor="employeeFullName">Employee Full Name:</label>
          <input
            type="text"
            id="employeeFullName"
            value={employeeFullName}
            onChange={(e) => setEmployeeFullName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-button">Create Vacation</button>
      </form>
    </div>
  );
};

export default AddVacation;
