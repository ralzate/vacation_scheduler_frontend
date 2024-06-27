import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'; // Asegúrate de que la ruta sea correcta según la estructura de tu proyecto
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
