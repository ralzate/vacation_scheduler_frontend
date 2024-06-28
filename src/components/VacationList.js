import React, { useEffect, useState } from 'react';
import './VacationList.css'; 

const VacationList = () => {
  const [vacations, setVacations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const vacationsPerPage = 5; 
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchVacations = async () => {
      const token = localStorage.getItem('token');

      try {
        const response = await fetch(`http://localhost:3001/api/v1/vacations?page=${currentPage}&per_page=${vacationsPerPage}`, {
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
        setVacations(data.vacations); 
        setTotalPages(data.meta.total_pages);

      } catch (error) {
        console.error('Error fetching vacations:', error.message);
      }
    };

    fetchVacations();
  }, [currentPage]); 

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  return (
    <div className="vacation-list-container">
      <h2>Vacation List</h2>
      <ul className="vacation-list">
        {vacations.map((vacation, index) => (
          <li key={index} className="vacation-item">
            <div className="vacation-details">
              <div className="vacation-employee">{vacation.employee_full_name}</div>
              <div className="vacation-dates">
                {vacation.start_date} to {vacation.end_date}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default VacationList;
