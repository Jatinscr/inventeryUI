import React, { use, useState } from "react";
import {
  Typography,
  Paper,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
  Checkbox,
  Button,
  LinearProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
function Products() {
  const productsData = [
    {
      id: "098327NT",
      name: "Florey",
      price: 252.0,
      quantity: 46,
      sales: 387,
      img: "https://picsum.photos/seed/1/80",
    },
    {
      id: "098359NT",
      name: "Snövalla",
      price: 139.0,
      quantity: 28,
      sales: 892,
      img: "https://picsum.photos/seed/2/80",
    },
    {
      id: "098383NT",
      name: "Echoes Necklace",
      price: 99.0,
      quantity: 52,
      sales: 1145,
      img: "https://picsum.photos/seed/3/80",
    },
    {
      id: "098342NT",
      name: "Lömnäs",
      price: 68.0,
      quantity: 92,
      sales: 651,
      img: "https://picsum.photos/seed/4/80",
    },
    {
      id: "098371NT",
      name: "Kallaxa",
      price: 70.0,
      quantity: 119,
      sales: 234,
      img: "https://picsum.photos/seed/5/80",
    },
  ];

  const [query, setQuery] = useState("");
  const filterProdcts = productsData.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.id.toLowerCase().includes(query.toLowercase())
  );

  const maxSales = 1500;
  return (
    <Box sx={{ p: 3 }}>
      <Typography varient="h4" sx={{ fontweight: 800, mb: 2 }}>
        Products
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mb: 3, gap: 2 }}
      >
        <Paper
          component="form"
          sx={{ flex: 1, display: "flex", alignItems: "center", p: "6px 12px" }}
        >
          <TextField
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search"
            varient="standard"
            fullWidth
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Paper>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button variant="outlined" startIcon={<FilterListIcon />}>
            Export
          </Button>
          <Button variant="outlined" startIcon={<AddIcon />}>
            {" "}
            Add products
          </Button>
        </Box>
        <Button variant="outlined" startIcon={<FilterListIcon />}>
          {" "}
          Filter
        </Button>
      </Box>
    </Box>
  );
}
export default Products;
