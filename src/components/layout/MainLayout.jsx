import React, { useState } from "react";
import { Box, Drawer } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Desktop Sidebar */}
      <Box
        component="nav"
        sx={{
          width: sidebarCollapsed ? 64 : 280,
          flexShrink: 0,
          transition: "width 0.3s ease",
        }}
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: sidebarCollapsed ? 64 : 280,
              transition: "width 0.3s ease",
            },
          }}
          open
        >
          <Sidebar
            isCollapsed={sidebarCollapsed}
            onToggle={handleSidebarToggle}
          />
        </Drawer>
      </Box>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${sidebarCollapsed ? 64 : 280}px)` },
          transition: "width 0.3s ease",
          minHeight: "100vh",
          backgroundColor: "#f5f8fa",
        }}
      >
        <Header onDrawerToggle={handleDrawerToggle} />

        {/* Page Content */}
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
          },
        }}
      >
        <Sidebar isCollapsed={false} onToggle={handleSidebarToggle} />
      </Drawer>
    </Box>
  );
};

export default MainLayout;
