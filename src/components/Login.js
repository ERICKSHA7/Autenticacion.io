import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../index.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mt-5 ">
      <h2 className="text-center">Iniciar Sesión</h2>
      <br />
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleLogin}>
        <div className="mb-3 ">
          <label>Email </label>
          <input
            type="email"
            className="form-control btn btn-outline-light"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 ">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control btn btn-outline-light"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      <br />
        <button type="submit" className="mx-auto btn btn-outline-light">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
