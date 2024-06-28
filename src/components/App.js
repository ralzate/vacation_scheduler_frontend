import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './Header';
import Home from './Home'; 
import VacationList from './VacationList';
import VacationForm from './VacationForm';

const App = () => {
  return (
    <Router>
      <div>
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vacations" element={<VacationList />} />
          <Route path="/add-vacation" element={<VacationForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
