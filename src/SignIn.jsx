import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import './signIn.css';

const SignIn = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Basic validation (you can enhance it as per your needs)
    if (email === 'ganeshnaik@gmail.com' && password === 'password') {
      onLogin();
      navigate('/'); // Redirect to homepage after login
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <Box className="signin-container">
      <Box className="signin-box">
        <Avatar className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className="signin-title">
          Sign in
        </Typography>

        <Box component="form" noValidate className="signin-form" onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signin-input"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signin-input"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="signin-button"
          >
            SIGN IN
          </Button>

          <Box className="signup-link">
            <Typography variant="body2">
              Don&apos;t have an account?{' '}
              <a href="/signup" className="link">
                Sign Up
              </a>
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

export default SignIn;
