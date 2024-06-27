import React, { useEffect, useState } from 'react';

const VacationList = () => {
  const [vacations, setVacations] = useState([]);

  useEffect(() => {
    const fetchVacations = async () => {
      const token = localStorage.getItem('token');

      try {
        const response = await fetch('http://localhost:3001/api/v1/vacations', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setVacations(data); 

      } catch (error) {
        console.error('Error fetching vacations:', error.message);
      }
    };

    fetchVacations();
  }, []);

  return (
    <div>
      <h1>Vacation List</h1>
      <ul>
        {vacations.map((vacation, index) => (
          <li key={index}>
            {vacation.employee_full_name} - {vacation.start_date} to {vacation.end_date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VacationList;
