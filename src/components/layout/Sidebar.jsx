import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import {
  Dashboard,
  ShoppingCart,
  People,
  Receipt,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { text: "Dashboard", icon: <Dashboard />, path: "/dashboard" },
  { text: "Products", icon: <ShoppingCart />, path: "/products" },
  { text: "Orders", icon: <Receipt />, path: "/orders" },
  { text: "Customers", icon: <People />, path: "/customers" },
  { text: "Settings", icon: <Settings />, path: "/settings" },
];

const Sidebar = ({ isCollapsed, onToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleItemClick = (path) => {
    navigate(path);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isCollapsed ? 64 : 280,
        flexShrink: 0,
        transition: "width 0.3s ease",
        width: isCollapsed ? 64 : 280,
        // boxSizing: "border-box",
        backgroundColor: "white",
        color: "#6b7280",
        border: "none",
        // boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
        transition: "width 0.3s ease",
        overflowX: "hidden",
      }}
    >
      {/* Sidebar Header with Logo */}
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: isCollapsed ? "center" : "space-between",
          minHeight: "64px",
        }}
      >
        {!isCollapsed ? (
          <>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* Company Logo - Replace with your logo */}
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  backgroundColor: "#3699ff",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "12px",
                  mr: 2,
                }}
              >
                E
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#090909",
                  fontSize: "1.20rem",
                }}
              >
                ECME
              </Typography>
            </Box>
            <IconButton
              onClick={onToggle}
              size="small"
              sx={{
                color: "#6b7280",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              <ChevronLeft />
            </IconButton>
          </>
        ) : (
          <>
            {/* Collapsed Logo */}
            <Box
              sx={{
                width: 32,
                height: 32,
                backgroundColor: "#3699ff",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: "12px",
              }}
            >
              E
            </Box>
            <IconButton
              onClick={onToggle}
              size="small"
              sx={{
                position: "absolute",
                bottom: 16,
                left: "50%",
                transform: "translateX(-50%)",
                color: "#6b7280",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              <ChevronRight />
            </IconButton>
          </>
        )}
      </Box>

      {/* Navigation Menu - Always Visible */}
      <List sx={{ px: 1, py: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => handleItemClick(item.path)}
              sx={{
                borderRadius: "8px",
                justifyContent: isCollapsed ? "center" : "flex-start",
                px: isCollapsed ? 1 : 2,
                "&.Mui-selected": {
                  backgroundColor: "rgba(54, 153, 255, 0.1)",
                  "&:hover": {
                    backgroundColor: "rgba(54, 153, 255, 0.15)",
                  },
                  "& .MuiListItemIcon-root": {
                    color: "#3699ff",
                  },
                },
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color:
                    location.pathname === item.path ? "#3699ff" : "#6b7280",
                  minWidth: isCollapsed ? "auto" : 40,
                  marginRight: isCollapsed ? 0 : 2,
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>

              {!isCollapsed && (
                <ListItemText
                  primary={item.text}
                  sx={{
                    "& .MuiTypography-root": {
                      color:
                        location.pathname === item.path ? "#3699ff" : "#374151",
                      fontWeight:
                        location.pathname === item.path ? "600" : "normal",
                      fontSize: "0.875rem",
                    },
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
