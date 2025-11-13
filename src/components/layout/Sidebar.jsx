import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Toolbar,
  Divider,
} from "@mui/material";
import {
  Dashboard,
  ShoppingCart,
  People,
  Receipt,
  Settings,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

const menuItems = [
  { text: "Dashboard", icon: <Dashboard />, path: "/dashboard" },
  { text: "Products", icon: <ShoppingCart />, path: "/products" },
  { text: "Orders", icon: <Receipt />, path: "/orders" },
  { text: "Customers", icon: <People />, path: "/customers" },
  { text: "Settings", icon: <Settings />, path: "/settings" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
