import React from "react";
import { Typography, Paper, Box } from "@mui/material";

const Orders = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Orders
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6">Orders Management</Typography>
        <Typography>
          This is the orders page where you can manage customer orders.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Orders;
