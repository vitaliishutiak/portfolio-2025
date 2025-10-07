import React from 'react'
import { Box, Typography } from '@mui/material'

const ExperienceBlock: React.FC = () => {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 15 }, backgroundColor: '#121212' }}>
      <Box sx={{ 
        width: { xs: '100%', md: '1040px' }, 
        maxWidth: '1040px', 
        mx: 'auto', 
        px: { xs: 2, md: 0 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: '32px', md: '24px' }
      }}>
      <Typography>
        Work Experience
      </Typography>
    </Box>
    </Box>
  )
}

export default ExperienceBlock