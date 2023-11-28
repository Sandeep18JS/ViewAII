import { useState, useEffect } from 'react'
import { DataTable } from './component/datatable';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=20')
      .then(response => response.json())
      .then(data => setData(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='bg-323232 w-full h-screen text-white '>
      <h1 className='text-2xl text-adaeaf py-4 ml-14 font-yatra font-bold'>DataTable</h1>
      <DataTable data={data} />
    </div>
  );
}

export default App




