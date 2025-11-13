import React from "react";
import { Typography, Paper, Box } from "@mui/material";

const Products = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6">Products Management</Typography>
        <Typography>
          This is the products page where you can manage your products.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Products;
