import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Avatar,
  Grid,
  Divider,
  Button,
  Paper,
  Container,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#4a6fa5",
    },
    background: {
      default: "#f5f7fa",
    },
  },
  typography: {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
});

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    firstName: "Angelina",
    username: "Gotelli",
    email: "carolyn_h@hotmail.com",
    phone: "+1 121231234",
    country: "United States",
    address: "123 Main St",
    city: "New York",
    postalCode: "10001",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (field, value) => {
    setUserData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, you would save to backend here
    console.log("Saved data:", userData);
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "background.default",
          py: 4,
        }}
      >
        <Container maxWidth="md">
          <Card
            elevation={3}
            sx={{
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <Box
              sx={{
                backgroundColor: "primary.main",
                color: "white",
                py: 3,
                textAlign: "center",
              }}
            >
              <Typography variant="h4" component="h1" fontWeight="600">
                User Profile
              </Typography>
            </Box>

            {/* Profile Header */}
            <Box sx={{ p: 3, borderBottom: 1, borderColor: "divider" }}>
              <Grid container spacing={3} alignItems="center">
                <Grid item>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: "primary.main",
                      fontSize: "2rem",
                      fontWeight: "bold",
                    }}
                  >
                    {getInitials(userData.firstName + " " + userData.username)}
                  </Avatar>
                </Grid>
                <Grid item xs>
                  <Typography variant="h5" component="h2" fontWeight="600">
                    {userData.firstName} {userData.username}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    @{userData.username.toLowerCase()}
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            <CardContent sx={{ p: 0 }}>
              {/* Personal Information Section */}
              <Box sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    mb: 2,
                    color: "primary.main",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Personal Information
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      value={userData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      disabled={!isEditing}
                      variant={isEditing ? "outlined" : "filled"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Username"
                      value={userData.username}
                      onChange={(e) =>
                        handleInputChange("username", e.target.value)
                      }
                      disabled={!isEditing}
                      variant={isEditing ? "outlined" : "filled"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      value={userData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      disabled={!isEditing}
                      variant={isEditing ? "outlined" : "filled"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      value={userData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      disabled={!isEditing}
                      variant={isEditing ? "outlined" : "filled"}
                    />
                  </Grid>
                </Grid>
              </Box>

              <Divider />

              {/* Address Information Section */}
              <Box sx={{ p: 3 }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    mb: 2,
                    color: "primary.main",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Address Information
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Country"
                      value={userData.country}
                      onChange={(e) =>
                        handleInputChange("country", e.target.value)
                      }
                      disabled={!isEditing}
                      variant={isEditing ? "outlined" : "filled"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Address"
                      value={userData.address}
                      onChange={(e) =>
                        handleInputChange("address", e.target.value)
                      }
                      disabled={!isEditing}
                      variant={isEditing ? "outlined" : "filled"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="City"
                      value={userData.city}
                      onChange={(e) =>
                        handleInputChange("city", e.target.value)
                      }
                      disabled={!isEditing}
                      variant={isEditing ? "outlined" : "filled"}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Postal Code"
                      value={userData.postalCode}
                      onChange={(e) =>
                        handleInputChange("postalCode", e.target.value)
                      }
                      disabled={!isEditing}
                      variant={isEditing ? "outlined" : "filled"}
                    />
                  </Grid>
                </Grid>
              </Box>

              {/* Action Buttons */}
              <Box
                sx={{
                  p: 3,
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 2,
                }}
              >
                {isEditing ? (
                  <Box>
                    <Button
                      variant="outlined"
                      onClick={() => setIsEditing(false)}
                    >
                      Cancel
                    </Button>
                    <Button variant="contained" onClick={handleSave}>
                      Save Changes
                    </Button>
                  </Box>
                ) : (
                  <Button
                    variant="contained"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Profile
                  </Button>
                )}
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ProfilePage;
