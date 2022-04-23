import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PetsIcon from "@mui/icons-material/Pets";
import Auth from "../utils/auth";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(Auth.loggedIn());

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        {loggedIn ? (
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              href="/"
            >
              <PetsIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Fetch
            </Typography>
            <IconButton href="/profile">
              <PersonIcon color="white" fontSize="large" />
            </IconButton>

            {/* <Button href="/main" color="inherit">
              Find New Matches
            </Button> */}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              href="/profile"
            >
              <PersonIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              href="/matches"
            >
              <PeopleAltIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              href="/main"
            >
              <SearchIcon />
            </IconButton>



            {/* <IconButton href="/profile">
              <SearchIcon fontSize="large" className="header__icon" />
            </IconButton> */}

            {/* <Button href="/profile" color="inherit">
							Edit Profile
						</Button>
						<Button href="/matches" color="inherit">
							View Matches
						</Button> */}
            <Button href="/" color="inherit" onClick={Auth.logout}>
              Logout
            </Button>
          </Toolbar>
        ) : (
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <PetsIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Fetch
            </Typography>
            <Button href="/" color="inherit">
              Home
            </Button>
            <Button href="/login" color="inherit">
              Login
            </Button>
            <Button href="/register" color="inherit">
              Register
            </Button>
          </Toolbar>
        )}
      </AppBar>
    </Box>
  );
};

export default NavBar;
