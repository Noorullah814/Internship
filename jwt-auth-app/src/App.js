import React, { useContext, lazy, Suspense } from 'react';
import { AuthContext } from './context/AuthContext';

const Login = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/Login')), 1000); // 800ms delay
  })
);

const Dashboard = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => resolve(import('./pages/Dashboard')), 1000);
  })
);

function App() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <h2>Checking authentication...</h2>;
  }

  return (
    <div className="app">
      <h1>JWT Authentication System</h1>

      {/* Suspense handles lazy loading UI */}
      <Suspense fallback={<h2>Loading page...</h2>}>
        {user ? <Dashboard /> : <Login />}
      </Suspense>
    </div>
  );
}

export default App;