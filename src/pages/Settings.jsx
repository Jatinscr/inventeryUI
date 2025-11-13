import React from "react";
import { Typography, Paper, Box } from "@mui/material";

const Settings = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6">Application Settings</Typography>
        <Typography>
          This is the settings page where you can configure your application.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Settings;
