import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProcessList from './components/ProcessList/ProcessList';
import Memory from './components/Memory/Memory';
import './App.css';
import CPU from './components/CPU/CPU';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/');
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='App'>
      {data ? (
          <>
            <ProcessList processes={data.processes} />
            <CPU cpu={data.cpu} />
            <Memory mem={data.mem} />
          </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
