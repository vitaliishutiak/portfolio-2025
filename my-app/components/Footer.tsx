'use client';

import React from 'react'
import { Box, Typography, Button, Link } from '@mui/material'

const navItems = [
  {
    label: 'Home',
    href: '/'
  },
  
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Contact',
    href: '/contact'
  }
]

const socialItems = [
  {
    label: 'LinkedIn',
    href: '/linkedin'
  },
  
  {
    label: 'GitHub',
    href: '/github'
  },
  {
    label: 'Twitter',
    href: '/twitter'
  }
]

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: { xs: 6, md: 15 }, backgroundColor: '#121212' }}>
      <Box sx={{ 
        width: { xs: '100%', md: '1040px' }, 
        maxWidth: '1040px', 
        mx: 'auto', 
        px: { xs: 2, md: 0 },
        display: 'flex',
        gap: { xs: '32px', md: '40px' },
        fontFamily: 'var(--font-outfit)'
      }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '32px', md: '40px' }, width: '100%', maxWidth: '510px' }}>
          <Typography sx={{ fontSize: '40px', fontWeight: 500, color: '#fff' }}>Book a call, and I,ll take care of the rest</Typography>
          <Button sx={{ width: '100%', maxWidth: '113px', backgroundColor: '#FFCC00', color: '#000', fontSize: '18px', fontWeight: 500, borderRadius: '32px', padding: '5px 24px', fontFamily: 'var(--font-outfit)', textTransform: 'none' }}>Contact</Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '32px', md: '40px' } }}>
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              sx={{
                color: '#fff',
                textDecoration: 'none',
                fontFamily: 'var(--font-outfit)',
                fontSize: '18px',
                fontWeight: 500,
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: '#FFCC00',
                  textDecoration: 'underline'
                }
              }}
            >
              {item.label}
            </Link>
          ))}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '32px', md: '40px' } }}>
          {socialItems.map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              sx={{
                color: '#fff',
                textDecoration: 'none',
                fontFamily: 'var(--font-outfit)',
                fontSize: '18px',
                fontWeight: 500,
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: '#FFCC00',
                  textDecoration: 'underline'
                }
              }}
            >
              {item.label}
            </Link>
          ))}
        </Box>
          
        
      </Box>
    </Box>
  )
}

export default Footer
