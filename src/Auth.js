import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [pwd, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const response = await axios.post('http:127.0.0.1:5000/auth', { username, pwd });
      console.log('Login successful:', response.data);
      // Reset form fields
      setUsername('');
      setPassword('');
      setError(null);
      // Set loggedIn state to true
      setLoggedIn(true);
    } catch (error) {
      console.error('Error logging in:', error.message);
      setError('Invalid username or pwd. Please try again.'); // Set error message
    } finally {
      setSubmitting(false);
    }
  };

  if (loggedIn) {
    return <WelcomePage />;
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label htmlFor="username" className="form-label">Username:</label>
        <input
          type="text"
          id="username"
          className="form-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="pwd" className="form-label">password:</label>
        <input
          type="password"
          id="pwd"
          className="form-input"
          value={pwd}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="form-button" disabled={submitting}>Login</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

const WelcomePage = () => {
  return (
    <div>
      <h2>Welcome</h2>
      <p>You are now logged in!</p>
    </div>
  );
};

export default LoginForm;
