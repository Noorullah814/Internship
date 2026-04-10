import React, { useContext } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { AuthContext } from './context/AuthContext';

function App() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="app">
      <h1>JWT Authentication System </h1>
      
      {user ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;