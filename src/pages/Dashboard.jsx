import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  LinearProgress,
  IconButton,
  Menu,
  MenuItem,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  // MoreVert,
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  People,
  AttachMoney,
  BarChart,
  Inventory,
  LocalShipping,
  Star,
} from "@mui/icons-material";

// Mock data
const statsData = [
  {
    title: "Total Revenue",
    value: "$24,268",
    change: "+12%",
    trend: "up",
    icon: <AttachMoney sx={{ fontSize: 30 }} />,
    color: "#3699ff",
  },
  {
    title: "Total Orders",
    value: "1,258",
    change: "+8%",
    trend: "up",
    icon: <ShoppingCart sx={{ fontSize: 30 }} />,
    color: "#1bc5bd",
  },
  {
    title: "Active Customers",
    value: "845",
    change: "+5%",
    trend: "up",
    icon: <People sx={{ fontSize: 30 }} />,
    color: "#8950fc",
  },
  {
    title: "Conversion Rate",
    value: "4.8%",
    change: "-2%",
    trend: "down",
    icon: <BarChart sx={{ fontSize: 30 }} />,
    color: "#f64e60",
  },
];

const topProducts = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    category: "Electronics",
    price: "$999",
    sales: 245,
    stock: 45,
    rating: 4.8,
  },
  {
    id: 2,
    name: "MacBook Air",
    category: "Electronics",
    price: "$1,299",
    sales: 189,
    stock: 32,
    rating: 4.9,
  },
  {
    id: 3,
    name: "Nike Air Max",
    category: "Fashion",
    price: "$120",
    sales: 156,
    stock: 78,
    rating: 4.5,
  },
  {
    id: 4,
    name: "Samsung Galaxy",
    category: "Electronics",
    price: "$849",
    sales: 132,
    stock: 56,
    rating: 4.6,
  },
  {
    id: 5,
    name: "Adidas Ultraboost",
    category: "Fashion",
    price: "$180",
    sales: 98,
    stock: 124,
    rating: 4.7,
  },
];

const recentOrders = [
  {
    id: "#ORD-001",
    customer: "John Smith",
    date: "12 Nov 2024",
    amount: "$299",
    status: "Delivered",
  },
  {
    id: "#ORD-002",
    customer: "Sarah Johnson",
    date: "11 Nov 2024",
    amount: "$1,199",
    status: "Processing",
  },
  {
    id: "#ORD-003",
    customer: "Mike Wilson",
    date: "10 Nov 2024",
    amount: "$599",
    status: "Delivered",
  },
  {
    id: "#ORD-004",
    customer: "Emily Davis",
    date: "09 Nov 2024",
    amount: "$249",
    status: "Pending",
  },
  {
    id: "#ORD-005",
    customer: "Chris Brown",
    date: "08 Nov 2024",
    amount: "$899",
    status: "Delivered",
  },
];

const StatCard = ({ title, value, change, trend, icon, color }) => (
  <Card sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
    <CardContent sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 2,
        }}
      >
        <Box>
          <Typography
            color="textSecondary"
            variant="body2"
            fontWeight="500"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography variant="h4" fontWeight="bold" sx={{ color }}>
            {value}
          </Typography>
        </Box>
        <Avatar
          sx={{ bgcolor: `${color}15`, color: color, width: 60, height: 60 }}
        >
          {icon}
        </Avatar>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {trend === "up" ? (
          <TrendingUp sx={{ color: "#1bc5bd", fontSize: 20 }} />
        ) : (
          <TrendingDown sx={{ color: "#f64e60", fontSize: 20 }} />
        )}
        <Typography
          variant="body2"
          sx={{
            color: trend === "up" ? "#1bc5bd" : "#f64e60",
            fontWeight: "500",
          }}
        >
          {change} from last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const [menuAnchor, setMenuAnchor] = React.useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "success";
      case "Processing":
        return "primary";
      case "Pending":
        return "warning";
      default:
        return "default";
    }
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          E-Commerce Dashboard
        </Typography>
        <Typography variant="h5" sx={{ color: "text.secondary" }}>
          Here's what's happening with your store today.
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statsData.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StatCard {...stat} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Top Products */}
        <Grid item xs={12} lg={8}>
          <Card
            sx={{ borderRadius: 3, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
          >
            <CardContent sx={{ p: 0 }}>
              <Box
                sx={{
                  p: 3,
                  borderBottom: "1px solid",
                  borderColor: "divider",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1" fontWeight="bold">
                  Top Selling Products
                </Typography>
                <IconButton onClick={handleMenuOpen}>
                  {/* <MoreVert /> */}
                </IconButton>
                {/* <Menu
                  anchorEl={menuAnchor}
                  open={Boolean(menuAnchor)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose}>View All</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Export</MenuItem>
                </Menu> */}
              </Box>

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>PRODUCT</TableCell>
                      <TableCell>CATEGORY</TableCell>
                      <TableCell>PRICE</TableCell>
                      <TableCell>SALES</TableCell>
                      <TableCell>STOCK</TableCell>
                      <TableCell>RATING</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {topProducts.map((product) => (
                      <TableRow key={product.id} hover>
                        <TableCell>
                          <Typography variant="body2" fontWeight="500">
                            {product.name}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={product.category}
                            size="small"
                            variant="outlined"
                          />
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2" fontWeight="500">
                            {product.price}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="body2">
                            {product.sales}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <LinearProgress
                              variant="determinate"
                              value={
                                (product.sales /
                                  (product.sales + product.stock)) *
                                100
                              }
                              sx={{
                                flexGrow: 1,
                                height: 6,
                                borderRadius: 3,
                                backgroundColor: "#f3f6f9",
                                "& .MuiLinearProgress-bar": {
                                  backgroundColor: "#3699ff",
                                  borderRadius: 3,
                                },
                              }}
                            />
                            <Typography variant="body2" color="textSecondary">
                              {product.stock}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                            }}
                          >
                            <Star sx={{ color: "#ffa800", fontSize: 18 }} />
                            <Typography variant="body2">
                              {product.rating}
                            </Typography>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Store Performance
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography variant="body2" color="textSecondary">
                    Monthly Target
                  </Typography>
                  <Typography variant="body2" fontWeight="500">
                    75%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={75}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "#f3f6f9",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "#3699ff",
                      borderRadius: 4,
                    },
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Inventory sx={{ color: "#3699ff" }} />
                  <Box>
                    <Typography variant="body2" color="textSecondary">
                      Products
                    </Typography>
                    <Typography variant="h6" fontWeight="bold">
                      156
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <LocalShipping sx={{ color: "#1bc5bd" }} />
                  <Box>
                    <Typography variant="body2" color="textSecondary">
                      Shipped
                    </Typography>
                    <Typography variant="h6" fontWeight="bold">
                      89
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Orders & Quick Stats */}
        <Grid item xs={12} lg={4}>
          <Grid container spacing={3}>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  <Box
                    sx={{
                      p: 3,
                      borderBottom: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold">
                      Recent Orders
                    </Typography>
                  </Box>

                  <Box sx={{ p: 2 }}>
                    {recentOrders.map((order) => (
                      <Box
                        key={order.id}
                        sx={{
                          p: 2,
                          mb: 1,
                          borderRadius: 2,
                          backgroundColor: "grey.50",
                          "&:last-child": { mb: 0 },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: 1,
                          }}
                        >
                          <Typography variant="body2" fontWeight="500">
                            {order.id}
                          </Typography>
                          <Chip
                            label={order.status}
                            size="small"
                            color={getStatusColor(order.status)}
                          />
                        </Box>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          gutterBottom
                        >
                          {order.customer}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography variant="body2" color="textSecondary">
                            {order.date}
                          </Typography>
                          <Typography variant="body2" fontWeight="500">
                            {order.amount}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Quick Stats */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
