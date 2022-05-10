import React from 'react';
import { useMemo } from 'react';
import { QuickStart } from './quick-start';
import TestTable from './test-table';
import './App.css';

function App() {
  const columns = useMemo(
    () => [
      { Header: 'TITLE / DESCRIPTION', accessor: 'col1' },
      { Header: 'TYPE', accessor: 'col2' },
      { Header: 'IVAC', accessor: 'col3' },
      { Header: 'VOTING SYSTEM TYPE', accessor: 'col4' },
      { Header: 'STATE / COUNTY', accessor: 'col5' },
      { Header: 'VOTES AFFECTED', accessor: 'col6' },
      { Header: 'EVENT DATE', accessor: 'col7' },
    ],
    []
  );

  return (
    <div className={'w-screen h-screen flex place-content-center'}>
      <TestTable columns={columns} data={''} />
    </div>
  );
}

export default App;
