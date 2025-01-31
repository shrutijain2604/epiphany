import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // If you have any global styles

// This will render the App component inside the div with id="root"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
