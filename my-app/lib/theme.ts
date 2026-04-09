'use client';

import { createTheme } from '@mui/material/styles';

const accent = '#FFCC00';

export function createAppTheme() {
  return createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: accent,
        contrastText: '#000000',
      },
      secondary: {
        main: '#dc004e',
      },
      background: {
        default: '#F5F5F5',
        paper: '#F5F5F5',
      },
      text: {
        primary: '#121212',
        secondary: '#666666',
      },
      divider: '#E5E5E5',
    },
    typography: {
      fontFamily: 'var(--framer-font-family)',
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  });
}
