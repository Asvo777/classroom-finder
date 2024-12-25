import React from 'react'
import ReactDOM from "react-dom/client"; // Note the '/client' here
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
  );