import React from "react";
import { Box, Button, TextField, Typography, Paper, Grid } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Simulate authentication logic here
    // If successful, navigate to the home page
    navigate("/home"); // Redirect to home page
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Left side: Optional Image or empty space */}
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(/images/login.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#cfe8fc",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Right side: Sign In Component */}
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#ffffff",
            borderRadius: 3,
          }}
        >
          <LockOutlinedIcon sx={{ fontSize: 60, color: "#1976d2", mb: 2 }} />
          <Typography
            component="h1"
            variant="h4"
            sx={{ mb: 1, color: "#1976d2", fontWeight: "bold" }}
          >
            Welcome to PlacerX
          </Typography>
          <Typography component="h1" variant="h5" sx={{ mb: 3, color: "#555" }}>
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1, width: "80%" }}
            onSubmit={handleSubmit} // Call handleSubmit on form submit
          >
            <Box sx={{ mb: 2 }}>
              <TextField
                margin="normal"
                required
                fullWidth={false}
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#1976d2" },
                    "&:hover fieldset": { borderColor: "#115293" },
                    "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                  },
                }}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth={false}
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#1976d2" },
                    "&:hover fieldset": { borderColor: "#115293" },
                    "&.Mui-focused fieldset": { borderColor: "#1976d2" },
                  },
                }}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Box>
            <Button
              type="submit" // This triggers the onSubmit event of the form
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#1976d2",
                "&:hover": { backgroundColor: "#115293" },
              }}
            >
              Sign In
            </Button>
            <Typography
              variant="body2"
              align="center"
              sx={{ color: "#1976d2" }}
            >
              <a href="#!" style={{ textDecoration: "none", color: "#1976d2" }}>
                Forgot password?
              </a>
            </Typography>
            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 2, color: "#555" }}
            >
              Don't have an account?{" "}
              <a href="#!" style={{ textDecoration: "none", color: "#1976d2" }}>
                Register here
              </a>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
