import { useEffect, useState } from 'react';

const API_BASE_URL = 'http://localhost:3001/api/v1';

const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

const fetchVacations = async () => {
  try {
    const authToken = getAuthToken();
    const response = await fetch(`${API_BASE_URL}/vacations`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch vacations');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching vacations:', error);
    throw error;
  }
};

const VacationList = () => {
  const [vacations, setVacations] = useState([]);

  useEffect(() => {
    const loadVacations = async () => {
      try {
        const data = await fetchVacations();
        setVacations(data);
      } catch (error) {
        console.error('Error loading vacations:', error);
      }
    };
    loadVacations();
  }, []);

  return (
    <div>
      <h2>Vacation List</h2>
      <ul>
        {vacations.map((vacation) => (
          <li key={vacation.id}>
            <div>Name: {vacation.name}</div>
            <div>Start Date: {vacation.startDate}</div>
            <div>End Date: {vacation.endDate}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VacationList;
