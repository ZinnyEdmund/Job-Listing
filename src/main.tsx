import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import List from './list'

const Main: React.FC = () => {
  return (
    <div className='app-container'>
      <h1 className='myh1'>Job Listing App</h1>
      <List />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <StrictMode>
    <Main />
  </StrictMode>
);