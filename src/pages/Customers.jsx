import React from "react";
import { Typography, Paper, Box } from "@mui/material";

const Customers = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Customers
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6">Customers Management</Typography>
        <Typography>
          This is the customers page where you can manage customer information.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Customers;
