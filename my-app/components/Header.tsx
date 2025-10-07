'use client';

import React from 'react'
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material'
import ContactButton from './ContactButton'

const Header: React.FC = () => {
  const navButtonStyles = {
    fontFamily: 'var(--font-outfit)',
    fontWeight: 500,
    fontSize: '15px',
    lineHeight: '100%',
    letterSpacing: '0%',
    textTransform: 'none'
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      zIndex: 100,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backdropFilter: 'blur(10px)'
    }}>
      <Box sx={{ px: { xs: 2, md: 5 } }}>
        <Toolbar disableGutters sx={{ height: '72px', justifyContent: 'space-between' }}>
          <Typography 
            component="div" 
            sx={{ 
              fontFamily: 'var(--font-outfit)',
              fontWeight: 500,
              fontSize: '24px',
              lineHeight: '24px',
              letterSpacing: '0%'
            }}
          >
            Vitalii Shutiak
          </Typography>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 5 }}>
            <Button color="inherit" href="#projects" sx={navButtonStyles}>
              Projects
            </Button>
            <Button color="inherit" href="#about" sx={navButtonStyles}>
              About
            </Button>
            <Button color="inherit" href="#contact" sx={navButtonStyles}>
              Contact
            </Button>
          </Box>
          
          <ContactButton />
        </Toolbar>
      </Box>
    </AppBar>
  )
}

export default Header
