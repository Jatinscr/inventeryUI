import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Avatar,
  InputBase,
  Badge,
  Dialog,
  Paper,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search,
  Notifications,
  Settings,
  AccountCircle,
  Logout,
  Close,
} from "@mui/icons-material";
import { useAuth } from "../../context/AuthContext";
import { styled, alpha } from "@mui/material/styles";

// ... (your styled components remain same)

const Header = ({ onDrawerToggle }) => {
  const { currentUser, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleProfileMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
  };

  const handleSearchOpen = () => {
    setSearchOpen(true);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // ✅ FIX: Simple navigation without any hooks
  const handleProfileClick = () => {
    handleClose();
    window.location.href = "/profile"; // Simple and effective
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "#3f4254",
        boxShadow: "0px 1px 9px -3px rgba(0,0,0,0.1)",
        borderBottom: "1px solid #e4e6ef",
      }}
    >
      <Toolbar sx={{ minHeight: "70px !important" }}>
        {/* Mobile Menu Icon */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onDrawerToggle}
          sx={{
            mr: 2,
            display: { sm: "none" },
            color: "#7e8299",
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Search Icon Only - Left Side */}
        <IconButton
          size="large"
          aria-label="search"
          onClick={handleSearchOpen}
          sx={{
            color: "#7e8299",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
            mr: 1,
          }}
        >
          <Search />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />

        {/* Search Dialog */}
        <Dialog
          open={searchOpen}
          onClose={handleSearchClose}
          maxWidth="md"
          fullWidth
          PaperComponent={Paper}
          sx={{
            "& .MuiDialog-container": {
              alignItems: "flex-start",
              pt: 10,
            },
            "& .MuiPaper-root": {
              borderRadius: "12px",
              overflow: "hidden",
            },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "8px",
                  border: "1px solid #e4e6ef",
                  flexGrow: 1,
                  "&:hover": {
                    borderColor: "#3699ff",
                  },
                }}
              >
                <Box
                  sx={{
                    padding: "0 16px",
                    height: "100%",
                    position: "absolute",
                    pointerEvents: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#7e8299",
                  }}
                >
                  <Search />
                </Box>
                <InputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  value={searchQuery}
                  onChange={handleSearchChange}
                  sx={{
                    padding: "16px 16px 16px 0",
                    paddingLeft: "calc(1em + 48px)",
                    width: "100%",
                    color: "#3f4254",
                    fontSize: "1rem",
                  }}
                />
              </Box>
              <IconButton
                onClick={handleSearchClose}
                sx={{
                  color: "#7e8299",
                }}
              >
                <Close />
              </IconButton>
            </Box>
          </Box>
        </Dialog>

        {/* Right Side Icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* Profile */}
          {currentUser && (
            <>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="profile-menu"
                aria-haspopup="true"
                onClick={handleProfileMenu}
                sx={{
                  color: "#7e8299",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: "#3699ff",
                    fontSize: "0.875rem",
                    fontWeight: "bold",
                  }}
                >
                  {currentUser?.name?.charAt(0) || "U"}
                </Avatar>
              </IconButton>

              {/* Profile Menu */}
              <Menu
                id="profile-menu"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{
                  "& .MuiPaper-root": {
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                    minWidth: 160,
                  },
                }}
              >
                {/* ✅ FIXED: No hooks used */}
                <MenuItem onClick={handleProfileClick}>
                  <AccountCircle sx={{ mr: 1, fontSize: 20 }} />
                  My Profile
                </MenuItem>
                {/* <MenuItem onClick={handleClose}>
                  <Settings sx={{ mr: 1, fontSize: 20 }} />
                  Settings
                </MenuItem> */}
                <MenuItem onClick={handleLogout}>
                  <Logout sx={{ mr: 1, fontSize: 20 }} />
                  Logout
                </MenuItem>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
