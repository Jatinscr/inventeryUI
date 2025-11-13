import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  AppBar,
  Toolbar,
  Avatar,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { Logout, AccountCircle, Email, Person } from "@mui/icons-material";

const Dashboard = () => {
  const { currentUser, logout } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Commerce Dashboard
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar sx={{ width: 32, height: 32 }}>
              <AccountCircle />
            </Avatar>
            <Typography>{currentUser?.name}</Typography>
            <Button color="inherit" onClick={logout}>
              <Logout sx={{ mr: 1 }} />
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Your Dashboard, {currentUser?.name}! 🎉
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <Person /> User Information
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="body1"
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
                >
                  <Person sx={{ fontSize: 18 }} />
                  <strong>Name:</strong> {currentUser?.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
                >
                  <Email sx={{ fontSize: 18 }} />
                  <strong>Email:</strong> {currentUser?.email}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <strong>Role:</strong> {currentUser?.role}
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Quick Stats
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Card sx={{ bgcolor: "primary.main", color: "white" }}>
                    <CardContent>
                      <Typography variant="h6">0</Typography>
                      <Typography variant="body2">Orders</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card sx={{ bgcolor: "secondary.main", color: "white" }}>
                    <CardContent>
                      <Typography variant="h6">$0</Typography>
                      <Typography variant="body2">Revenue</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Paper sx={{ p: 3, mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            How This Works
          </Typography>
          <Typography variant="body1">
            ✅ <strong>Any email</strong> - koi bhi email ID daalo
            (example@anything.com)
            <br />✅ <strong>Any password</strong> - koi bhi password daalo
            (minimum 3 characters)
            <br />✅ <strong>Auto login</strong> - automatically user create ho
            jayega
            <br />✅ <strong>Persistent</strong> - browser remember karega login
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;
