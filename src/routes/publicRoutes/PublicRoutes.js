import React from 'react';
import Register from '../../pages/register/Register';
import Login from '../../pages/login/Login';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';

const PublicRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register/>}  />
        <Route path="/login" element={<Login/>}  />
        <Route path="/service" element={<Home/>}  />

        
      </Routes>
    </div>
  );
}

export default PublicRoutes;
