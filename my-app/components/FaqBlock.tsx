'use client';

import React from 'react'
import { Box, Container, Typography } from '@mui/material'

const FaqBlock: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 15 } }}>
      <Box sx={{ 
        width: { xs: '100%', md: '1040px' }, 
        maxWidth: '1040px', 
        mx: 'auto', 
        px: { xs: 2, md: 0 },
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: '32px', md: '40px' },
        fontFamily: 'var(--font-outfit)'
      }}>
      <Typography sx={{ fontSize: '40px', fontWeight: 500, color: '#121212' }}>
        FAQ
      </Typography>
      </Box>
    </Box>
  )
}

export default FaqBlock
