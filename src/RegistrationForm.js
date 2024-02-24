import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [user, setUsername] = useState('');
  const [pwd, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track if passwords match
  const [submitting, setSubmitting] = useState(false); // State to track if form is being submitted
  const [error, setError] = useState(null); // State to track submission errors

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pwd === verifyPassword) {
      try {
        setSubmitting(true); // Set submitting state to true
        const response = await axios.post('http://127.0.0.1:5000/register', { user, pwd });
        console.log('Registration successful:', response.data);
        // Clear form fields
        setUsername('');
        setPassword('');
        setVerifyPassword('');
        setPasswordsMatch(true); // Reset pwd match state
        setError(null); // Reset error state
      } catch (error) {
        console.error('Error registering:', error.message);
        setError('An error occurred while registering. Please try again.'); // Set error message
      } finally {
        setSubmitting(false); // Set submitting state back to false
      }
    } else {
      setPasswordsMatch(false);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div>
        <label htmlFor="user" className="form-label">user:</label>
        <input
          type="text"
          id="user"
          className="form-input"
          value={user}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="pwd" className="form-label">pwd:</label>
        <input
          type="password"
          id="pwd"
          className="form-input"
          value={pwd}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="verifyPassword" className="form-label">Verify pwd:</label>
        <input
          type="password"
          id="verifyPassword"
          className="form-input"
          value={verifyPassword}
          onChange={(e) => setVerifyPassword(e.target.value)}
          required
        />
        {!passwordsMatch && <p className="error-message">Passwords do not match</p>}
      </div>
      <button type="submit" className="form-button" disabled={submitting}>Register</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default RegistrationForm;
