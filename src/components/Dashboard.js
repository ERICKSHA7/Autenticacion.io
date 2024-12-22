import React from 'react';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <h2>Bienvenido al Dashboard</h2>
      <button onClick={handleLogout} className="btn btn-danger">
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Dashboard;
