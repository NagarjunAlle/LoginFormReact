import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; // Import CSS file

function LoginForm() {
  const [username, setUsername] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePanNumberChange = (e) => {
    setPanNumber(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic to handle form submission here
    // For example, you can send the form data to an API
    console.log("Username:", username);
    console.log("PAN Number:", panNumber);
    console.log("File:", file);
    // Redirect to the home page after successful login
    navigate('/home');
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <label>PAN Number:</label>
          <input type="text" value={panNumber} onChange={handlePanNumberChange} />
        </div>
        <div className="form-group">
          <label>Upload File:</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
