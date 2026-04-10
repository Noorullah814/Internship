import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { loginUser } from '../utils/Api';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { login } = useContext(AuthContext);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  try {
    const data = await loginUser({ email, password });

    // Save token + user
    login(data.token, data.user);

    alert("Login Successful!");
  } catch (err) {
    setError(err.response?.data?.message || "Login failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className='login-form'>
        <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="input-group">
             <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
       <div className="input-group">
          <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
       </div>
      
        <button 
          type="submit" 
          disabled={loading}
          className='log-in'
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      {error && <p className='error-msg'>{error}</p>}
    </div>
  );
};

export default Login;