"use client";
import localFont from "next/font/local";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Montserrat } from "next/font/google";
import { Caveat } from "next/font/google";

const localFnt = localFont({
  src: [
    {
      path: "../fonts/Gill-Sans-MT-Italic.ttf",
    },
  ],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#ffff",
    },
    background: {
      paper: "#ffff",
      default: "#ffff",
    },
    text: {
      primary: "#0C0C0C",
      secondary: "#fff",
    },
    grey: {
      500: "#D1D9CF",
      800: "#404040",
    },
    success: {
      main: "#5A6D57",
      light: "#748C70",
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    h4: {
      fontFamily: caveat.style.fontFamily,
      lineHeight: 1.75,
      fontSize: "2.4rem",
    },
    h5: {
      fontFamily: caveat.style.fontFamily,
      lineHeight: 1.75,
      fontSize: "1.6rem",
    },
  },

  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: "green",
          "&.Mui-selected": {
            color: "#5A6D57",
          },
          "&:hover": {
            color: "#5A6D57",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "0.9rem",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#606060",
          "&.Mui-focused": {
            color: "#748C70",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: "12px",
        },
        root: {
          borderRadius: 0,
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#748C70",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            color: "#D1D9CF",
            opacity: 1,
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
      styleOverrides: {
        root: {
          color: "inherit",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "none",
          },
        },
      },
      defaultProps: {
        disableRipple: true,
        disableElevation: false,
        disableFocusRipple: true,
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
