import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Link,
} from '@mui/material';
import logo from './../images/logo.png';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    // Reset previous error messages
    setUsernameError('');
    setPasswordError('');

    // Validation logic
    const usernameRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^[a-zA-Z0-9@]*$/;

    if (!username.match(usernameRegex)) {
      setUsernameError('Invalid email address');
      return;
    }

    if (!password.match(passwordRegex)) {
      setPasswordError('Invalid password format');
      return;
    }

    if (password === 'SmartServTest@123') {
        // Redirect to the dashboard page
        window.location.href = '/dashboard'
      } else {
        setPasswordError('Invalid password');
      }

    
    console.log('Login successful');
  };

  const handleForgotPasswordClick = () => {
    window.location.href = 'mailto:support@smartserv.io?subject=Password%20Reset%20Request';
  };

  return (
    <div
      style={{ width: '100vw', height: '100vh', backgroundColor: '#1e1e1e', margin: 0 }}
    >
      <Container component="main" maxWidth="xs" style={{ paddingTop: '100px' }}>
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            bgcolor: 'black',
            padding: 7,
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <img src={logo} alt="logo" style={{ width: '100%', marginBottom: '20px' }} />
          <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              name="username"
              autoComplete="username"
              placeholder="Username"
              size="small"
              sx={{
                '& .MuiInputBase-input': {
                  color: 'white', // text color
                },
                '& label.Mui-focused': {
                  color: 'green', // label color when focused
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: 'green', 
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'green', 
                  },
                  '.MuiInputBase-root': {
                    bgcolor: 'white', 
                    borderRadius: 'inherit', 
                  },
                },
              }}
              InputProps={{
                inputProps: {
                  pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$', // Regular expression for a valid email
                },
              }}
              onChange={handleUsernameChange}
              error={!!usernameError}
              helperText={usernameError}
              value={username}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              placeholder="Password"
              autoComplete="current-password"
              size="small"
              sx={{
                '& .MuiInputBase-input': {
                  color: 'white', // text color
                },
                '& label.Mui-focused': {
                  color: 'green', // label color when focused
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: 'green', // underline color when focused
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'green', // default border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'white', // border color when hovered
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'green', // border color when focused
                  },
                },
              }}
              InputProps={{
                inputProps: {
                  pattern: '^[a-zA-Z0-9@]*$', // Regular expression to allow only letters, numbers, and "@"
                },
              }}
              onChange={handlePasswordChange}
              error={!!passwordError}
              helperText={passwordError}
              value={password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: '#5bca5b',
                '&:hover': {
                  bgcolor: 'darkgreen',
                },
                borderRadius: 2,
              }}
            >
              Login
            </Button>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
              <Link
                href="#"
                variant="body2"
                sx={{ color: 'grey.500' }}
                onClick={handleForgotPasswordClick}
              >
                Forgot your password?
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Login;
