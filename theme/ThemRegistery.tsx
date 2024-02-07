'use client';
import React from 'react';

import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';

import { CssBaseline } from '@mui/material';

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const themeOptions: ThemeOptions = {
  palette: {
    background: {
      paper: '#5A6D57',
      default: '#ffff',
    },

    // primary: {
    //   main: '#0C0C0C',
    // },
    text: {
      primary: '#0C0C0C',
      secondary: '#fff',
    },
    grey: {
      500: '#D1D9CF',
      800: '#404040',
    },
    success: {
      main: '#5A6D57',
      light: '#748C70',
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },

  components: {
    MuiButton: {
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
