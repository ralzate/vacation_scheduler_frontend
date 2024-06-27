import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

const VacationList = () => {
  const [vacations, setVacations] = useState([]);

  useEffect(() => {
    axios.get('/api/vacations')
      .then(response => {
        setVacations(response.data);
      })
      .catch(error => {
        console.error('Error fetching vacations:', error);
      });
  }, []);

  return (
    <div>
      <h2>List of Vacations</h2>
      <ul>
        {vacations.map(vacation => (
          <li key={vacation.id}>
            <strong>{vacation.employee}</strong> - {vacation.startDate} to {vacation.endDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VacationList;
