// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Ensure this file exists
import App from './App';

const root = createRoot(document.getElementById('root')); // React 18+ syntax
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
