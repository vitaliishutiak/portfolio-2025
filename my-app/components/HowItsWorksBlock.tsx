import React from 'react'
import { Box, Typography } from '@mui/material'
import HowItsWorksCard from './HowItsWorksCard'
import { howItsWork } from '../data/howItsWork'

const HowItsWorksBlock: React.FC = () => {
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
        <Box sx={{ width: '100%', maxWidth: { xs: '100%', md: '510px' } }}>
            <Typography sx={{ 
              color: '#FFCC00', 
              fontSize: { xs: '16px', md: '20px' }, 
              fontWeight: 500,
              fontFamily: "var(--font-outfit)",
              mb: { xs: 2, md: 3 }
            }}>
                How it Works
            </Typography>
            <Typography sx={{ 
              color: '#fff', 
              fontSize: { xs: '24px', md: '40px' }, 
              fontWeight: 500,
              fontFamily: "var(--font-outfit)",
              lineHeight: { xs: '130%', md: '120%' }
            }}>
                A simple and efficient workflow to bring your vision to life. From the first call to final delivery, every step is designed for clarity and efficiency.
            </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '16px', md: '24px' } }}>
            {
                howItsWork.map((item) => (
                    <HowItsWorksCard key={item.number} number={item.number} title={item.title} description={item.description} />
                ))
            }
        </Box>
    </Box>
    </Box>
  )
}

export default HowItsWorksBlock
