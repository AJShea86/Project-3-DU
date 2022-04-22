import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PetsIcon from '@mui/icons-material/Pets';

import { useState } from 'react';
import { useMutation } from '@apollo/client';
import React from 'react'
import { LOGIN } from '../utils/mutations';

import Auth from '../utils/auth';


const theme = createTheme();
 function LoginForm() {
   const [email, setEmail] = useState(false)
   const [password, setPassword] = useState(false)
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  })

  const [login,{ error, data}] = useMutation(LOGIN)

  const handleChange = (event) => {
    const {email,name, value} = event.target
    console.log(event.target.name)
    console.log(formState)
    setFormState({
      ...formState,
      [event.target.name]: value
    })
    if(email=== ''){
      setEmail(true)
      // setPassword(true)
    }
  }

const handleSubmit = async (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get('email'),
    password: data.get('password'),
  });
  try {
    const { data }  = await login({
      variables: { ...formState },
    });
console.log(data)
    Auth.login(data.login.token, data.login.user._id);
  } catch (e) {
    console.log(JSON.stringify(e, null, 2));
  }
};

return (
  <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'black' }}>
          <PetsIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            error={email}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formState.email}
            onChange={handleChange}
          />

           <TextField
            error = {password}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            helperText="Incorrect entry."
            autoComplete="current-password"
            value={formState.password}
            onChange={handleChange}

          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
  )
}

export default LoginForm;