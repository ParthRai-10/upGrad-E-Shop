import React, { useState } from 'react';
import { Avatar, Button, TextField, Typography, Box } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import './signUp.css'; // Create a CSS file for custom styles

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form validation and submit logic here
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Continue with signup logic
    alert('Sign Up Successful');
  };

  return (
    <Box className="signup-container">
      <Box className="signup-box">
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className="signup-title">
          Sign up
        </Typography>

        <Box component="form" noValidate className="signup-form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="First Name"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="signup-input"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Last Name"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="signup-input"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup-input"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="signup-input"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Contact Number"
            name="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="signup-input"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="signup-button"
          >
            SIGN UP
          </Button>

          <Box className="signin-link">
            <Typography variant="body2">
              Already have an account?{' '}
              <Link to="/login" className="link">
                Sign In
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className="footer">
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <a href="https://upgrad.com" className="link" target="_blank" rel="noopener noreferrer">
            upGrad
          </a>{' '}
          {new Date().getFullYear()}.
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;
