// Imports React modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Imports our App component
import App from './App';

// Creating Root React Component / Node.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // Strict Mode component provides us with React warnings in case of potential problems, such as
    // possible memory leaks.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure performance in Development environment.
reportWebVitals();
