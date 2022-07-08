import React, { useEffect, useState } from 'react';
import { getCases } from '../api/API';
import BarChart from '../components/barChart/BarChart';

const Dashboard = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    setCases(getCases());
  },[])

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
      </div>
      <BarChart cases={cases}/>
    </main>
  );
}

export default Dashboard;