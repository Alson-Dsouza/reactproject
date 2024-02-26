import React, { useState } from 'react';
import axios from 'axios';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if(username.endsWith('@pivotree.com')){
    try {
      const response = await axios.post('http://127.0.0.1:3005/login', { username, password });
      const { token } = response.data;
      localStorage.setItem('token', token); // Store token in local storage for future requests
      onLogin();
    } catch (error) {
      setError('Invalid username or password');
    }
  }else{
    setError('please enter pivotree emailid');
  }
  };

  return (
<div className="container" style={{marginTop:130}}>
  <h6 className="text-center mb-4">ENTER YOUR CREDENTIALS!!</h6>
  <div className="mb-3">
    <input
      type="email"
      className="form-control bg-light border-0 rounded-3"
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <input
      type="password"
      className="form-control bg-light border-0 rounded-3"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>
  <button onClick={handleSubmit} className="btn btn-primary btn-lg w-100 mb-3 bg-gradient">Login</button>
  {error && <p className="text-danger">{error}</p>}
</div>


  );
}

export default LoginForm;
