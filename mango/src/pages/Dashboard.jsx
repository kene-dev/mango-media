import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'


const Dashboard = () => {
  return (
      <div className='min-h-screen min-w-screen flex justify-between'> 
          <Sidebar />
           <Outlet />
      </div>
  );
};

export default Dashboard