"use client";
import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

function AppThemeProvider({ children }: { children: React.ReactNode }) {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const prefersDarkMode = false;

  // Initial theme configuration
  const initialTheme = createTheme({
    breakpoints: {
      keys: ["xs", "sm", "md", "lg", "xl"],
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
      primary: {
        main: "#8842FF",
        contrastText: "#FFF",
      },
      secondary: {
        main: "#15CEDA",
        contrastText: "#FFF",
      },
      success: {
        main: "#4caf50",
        contrastText: "#FFF",
      },
      warning: {
        main: "#ed6c02",
        contrastText: "#FFF",
      },
      info: {
        main: "#102042",
        dark: "#252B4D",
        light: "#3A3F5D",
        contrastText: "#FFF",
      },
      error: {
        main: "#ef3d18",
        contrastText: "#FFF",
      },
      action: {
        disabled: "#FFF",
      },
    },
    typography: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      button: {
        letterSpacing: "0.02857em",
        textTransform: "none",
      },
    },
    components: {
      MuiPopover: {
        styleOverrides: {
          paper: {
            backgroundColor: prefersDarkMode ? "#3A3F5D" : "#fff", // Set background color based on theme mode
            color: prefersDarkMode ? "#fff" : "#3A3F5D",
          },
        },
      },
      MuiInputLabel: {
        variants: [
          {
            props: {},
            style: {
              color: "#ACACAC",
              fontSize: 12,
              opacity: 0.8,
              fontWeight: 300,
            },
          },
          {
            props: { shrink: true },
            style: {
              color: "#E6E6E6",
              opacity: 1,
            },
          },
        ],
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            margin: 0,
          },
        },
      },
    },
  });

  // Declare the 'theme' variable and apply the custom button styles
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    // Check for dark mode preference on the client side
    setTheme((prevTheme) =>
      createTheme({
        ...prevTheme,
        palette: {
          ...prevTheme.palette,
          mode: prefersDarkMode ? "dark" : "light",
        },
        components: {
          ...prevTheme.components,
        },
      })
    );
  }, [prefersDarkMode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
