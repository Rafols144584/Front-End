import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { username, password });
    // Add your authentication logic here
  };

  return (
    <div className="login-screen">
      <div className="login-container">
        {/* Profile Avatar Section */}
        <div className="avatar-wrapper">
          <div className="avatar-circle">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
              alt="User profile" 
            />
          </div>
        </div>

        <h2 className="login-title">User Login</h2>

        {/* White Login Card */}
        <div className="login-card">
          <form onSubmit={handleLogin}>
            <input 
              type="text" 
              placeholder="Username" 
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="login-submit-btn">
              Log In
            </button>
          </form>
          <a href="#forgot" className="forgot-password-link">
            Forget Password
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;