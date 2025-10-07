'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: [
      'var(--font-geist-sans)',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export default theme;



