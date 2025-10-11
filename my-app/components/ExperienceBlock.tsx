import React, { useRef, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import ExperienceCard from '../components/ExperienceCard'
import { experience } from '../data/experience'
import { animateTitle } from '../lib/animations'

const ExperienceBlock: React.FC = () => {

  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      animateTitle(titleRef.current);
    }
  }, []);

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 15 }, backgroundColor: '#121212' }}>
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
      <Typography ref={titleRef} component="h2" sx={{ xs: { fontSize: '32px', md: '40px' }, fontWeight: 500, color: '#fff' }}>
        Work Experience
      </Typography>
      <Box sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: '32px', md: '20px' }
      }}>
        {experience.map((item) => (
          <ExperienceCard key={item.id} id={item.id} company={item.company} date={item.date} position={item.position} active={item.active} />
        ))}
      </Box>
    </Box>
    </Box>
  )
}

export default ExperienceBlock