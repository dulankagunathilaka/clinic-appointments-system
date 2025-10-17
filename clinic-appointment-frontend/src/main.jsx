import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Tailwind or custom styles
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';  // Ensure correct import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
