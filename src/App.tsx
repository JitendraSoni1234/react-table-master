import { useState } from 'react';
import Table from './components/table';

function App() {
  const [searchText, setSearchText] = useState('');
  const [pageNo, setPageNo] = useState(1);
  const tableProps = {
    header: {
      search: { value: searchText, onChange: setSearchText },
    },
    pagination: { pageNo, total: 100, perPage: 5, onChange: setPageNo },
  };
  return (
    <>
      <Table {...tableProps} />

      <h2>Value: {searchText}</h2>
    </>
  );
}

export default App;
