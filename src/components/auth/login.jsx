import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Container,
  Alert,
  CircularProgress,
  Avatar,
  Divider,
  Grid,
  Checkbox,
  FormControlLabel,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { LockOutlined, Google, GitHub } from "@mui/icons-material";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useAuth();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    if (password.length < 3) {
      setError("Password must be at least 3 characters");
      return;
    }

    setLoading(true);

    try {
      await login(email, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        // background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        py: 4,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "100vh" }}
        >
          {/* Login Form Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  padding: { xs: 3, md: 4 },
                  background: "transparent",
                  width: "100%",
                  maxWidth: 400,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "100%",
                  }}
                >
                  {/* Avatar - Top Left */}
                  <Avatar
                    sx={{
                      mb: 3,
                      bgcolor: "transparent",
                      width: 60,
                      height: 60,
                      "& .MuiSvgIcon-root": {
                        color: "#120208ff",
                        fontSize: 40,
                      },
                    }}
                  >
                    <LockOutlined />
                  </Avatar>

                  {/* Welcome Text */}
                  <Typography
                    component="h1"
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      color: "#120208ff",
                      mb: 1,
                      textAlign: "left",
                      width: "100%",
                    }}
                  >
                    Welcome back!
                  </Typography>

                  <Typography
                    variant="body1"
                    color="#120208ff"
                    sx={{
                      mb: 4,
                      textAlign: "left",
                      width: "100%",
                      opacity: 0.8,
                    }}
                  >
                    Please enter your credentials to sign in!
                  </Typography>

                  {error && (
                    <Alert
                      severity="error"
                      sx={{
                        width: "100%",
                        mb: 3,
                        borderRadius: 2,
                      }}
                    >
                      {error}
                    </Alert>
                  )}

                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ width: "350px" }}
                  >
                    {/* Email Field */}
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="Email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      sx={{
                        mb: 2,
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px", // <-- yahan se roundness control hoti hai
                        },
                      }}
                    />

                    {/* Password Field */}
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      sx={{
                        mb: 1,
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px",
                        },
                      }}
                    />

                    {/* Forgot Password Link - Right Aligned */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        mb: 3,
                        width: "100%",
                      }}
                    >
                      <Link
                        href="#"
                        variant="body2"
                        sx={{
                          textDecoration: "none",
                          color: "#120208ff",
                          fontWeight: "500",
                          opacity: 0.8,
                          "&:hover": {
                            textDecoration: "underline",
                            opacity: 1,
                          },
                        }}
                      >
                        Forgot password?
                      </Link>
                    </Box>

                    {/* Sign In Button */}
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={loading}
                      sx={{
                        mt: 1,
                        mb: 3,
                        py: 1.5,
                        borderRadius: 2,
                        fontSize: "1rem",
                        fontWeight: "bold",
                        backgroundColor: "#2a85ff",
                        color: "white",
                        "&:hover": { backgroundColor: "#0069ff" },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {loading ? (
                        <CircularProgress size={24} sx={{ color: "white" }} />
                      ) : (
                        "Sign In"
                      )}
                    </Button>

                    {/* Simple Divider - No Text */}
                    <Divider sx={{ my: 3 }} />
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>
          {/* Image/Branding Section - Hidden on mobile */}
          {!isMobile && (
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  textAlign: "center",
                  color: "white",
                  // p: 4,
                  // py: 8,
                  ml: 12,
                  height: "760px",
                  width: "600px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Background Image */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 32,
                    right: 0,
                    bottom: 20,
                    backgroundImage:
                      "url('https://ecme-next.themenate.net/img/others/auth-side-bg.png')",
                    backgroundSize: "cover",
                    // backgroundPosition: "center",
                    // backgroundRepeat: "no-repeat",
                    // zIndex: 0,
                  }}
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
