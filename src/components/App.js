import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import VacationList from './VacationList';
import VacationForm from './VacationForm';

const App = () => {
  return (
    <Router>
      <div>
          <Route path="/vacations" component={VacationList} />
          <Route path="/add-vacation" component={VacationForm} />
      </div>
    </Router>
  );
};

export default App;
