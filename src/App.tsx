import React from 'react';
import { BasicTable } from './components/BasicTable';

import './App.css';

function App() {
  return (
    <div className={'w-screen flex flex-col place-items-center p-10'}>
      <h1 className={'text-3xl font-extrabold'}>React Table</h1>

      <BasicTable />
    </div>
  );
}

export default App;
