import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import JobList from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <JobList />
    </div>
  </StrictMode>
);
