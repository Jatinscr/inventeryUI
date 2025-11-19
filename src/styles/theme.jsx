import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3699ff",
      light: "#e1f0ff",
    },
    secondary: {
      main: "#8950fc",
    },
    success: {
      main: "#1bc5bd",
    },
    warning: {
      main: "#ffa800",
    },
    error: {
      main: "#f64e60",
    },
    background: {
      default: "#f5f8fa",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
