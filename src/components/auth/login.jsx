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
  Link,
  useTheme,
  useMediaQuery,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password");
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

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Full Screen Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "url('https://ecme-next.themenate.net/img/others/auth-side-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.4) 100%)",
            zIndex: 1,
          },
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid
          container
          justifyContent="flex-start"
          alignItems="center"
          sx={{ minHeight: "100vh" }}
        >
          {/* Login Form Section - Left Side */}
          <Grid item xs={12} md={6} lg={5}>
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center", // ✅ Mobile: center
                  md: "flex-start", // ✅ Desktop: left
                },
                alignItems: "center",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: {
                    xs: "center", // ✅ Mobile: center
                    md: "flex-start", // ✅ Desktop: left
                  },
                  width: "100%",
                  maxWidth: "400px",
                }}
              >
                {/* Avatar - Responsive Alignment */}
                <Avatar
                  sx={{
                    mb: 3,
                    bgcolor: "#120208ff",
                    width: 60,
                    height: 60,
                    "& .MuiSvgIcon-root": {
                      color: "white",
                      fontSize: 30,
                    },
                    alignSelf: {
                      xs: "center", // ✅ Mobile: center
                      md: "flex-start", // ✅ Desktop: left
                    },
                  }}
                >
                  <LockOutlined />
                </Avatar>

                {/* Welcome Text - Responsive Alignment */}
                <Typography
                  component="h1"
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    color: "#120208ff",
                    mb: 1,
                    textAlign: {
                      xs: "center", // ✅ Mobile: center
                      md: "left", // ✅ Desktop: left
                    },
                    width: "100%",
                    alignSelf: {
                      xs: "center", // ✅ Mobile: center
                      md: "flex-start", // ✅ Desktop: left
                    },
                  }}
                >
                  Welcome back!
                </Typography>

                <Typography
                  variant="body1"
                  color="#120208ff"
                  sx={{
                    mb: 4,
                    textAlign: {
                      xs: "center", // ✅ Mobile: center
                      md: "left", // ✅ Desktop: left
                    },
                    width: "100%",
                    alignSelf: {
                      xs: "center", // ✅ Mobile: center
                      md: "flex-start", // ✅ Desktop: left
                    },
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
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: {
                      xs: "center", // ✅ Mobile: center
                      md: "flex-start", // ✅ Desktop: left
                    },
                  }}
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
                      mb: 3,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        backgroundColor: "#f7f7f8",
                        "& fieldset": {
                          borderColor: "#e5e5e7",
                        },
                        "&:hover fieldset": {
                          borderColor: "#2a85ff",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#2a85ff",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: "#6b6b6b",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#2a85ff",
                      },
                    }}
                  />

                  {/* Password Field with Eye Icon */}
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                            sx={{
                              color: "#6b6b6b",
                              "&:hover": {
                                color: "#2a85ff",
                              },
                            }}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      mb: 1,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        backgroundColor: "#f7f7f8",
                        "& fieldset": {
                          borderColor: "#e5e5e7",
                        },
                        "&:hover fieldset": {
                          borderColor: "#2a85ff",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#2a85ff",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: "#6b6b6b",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#2a85ff",
                      },
                    }}
                  />

                  {/* Sign In Button */}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={loading}
                    sx={{
                      mt: 3,
                      mb: 1,
                      py: 1.5,
                      borderRadius: "12px",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      backgroundColor: "#2a85ff",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#0069ff",
                        transform: "translateY(-1px)",
                        boxShadow: "0 4px 12px rgba(42, 133, 255, 0.3)",
                      },
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
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
