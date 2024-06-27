import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to Vacation Scheduler</h2>
      <ul>
        <li><Link to="/vacations">View Vacations</Link></li>
        <li><Link to="/add-vacation">Add Vacation</Link></li>
      </ul>
    </div>
  );
};

export default Home;
