import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PetsIcon from "@mui/icons-material/Pets";
import TextArea from "@mui/material/TextareaAutosize";
import React, { useState, Profiler } from "react";
import "../App.css";

const theme = createTheme();
function ProfileForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      age: data.get("age"),
      location: data.get("location"),
      bio: data.get("bio"),
      image: selectedFile,
    });
  };
  const fileSelectedHandler = (event) => setSelectedFile(event.target.files[0]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "black" }}>
            <PetsIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Profile
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="age"
              label="Age"
              name="age"
              autoComplete="age"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="location"
              label="Location"
              name="location"
              autoComplete="location"
            />
            <TextArea
              minRows={6}
              className="textArea"
              margin="normal"
              required
              id="bio"
              label="Biography"
              placeholder="Biography"
              name="bio"
              autoComplete="bio"
            />
            <div className="">
              <input type="file" onChange={fileSelectedHandler} />
            </div>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 3 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default ProfileForm;