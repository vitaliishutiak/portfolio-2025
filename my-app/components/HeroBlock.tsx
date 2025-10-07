import React from 'react'
import { Box, Typography } from '@mui/material'

const heroTitleStyles = {
  fontSize: { xs: '80px', sm: '130px', md: '200px' },
  textAlign: 'center',
  fontWeight: 600,
  lineHeight: { xs: '100px', sm: '130px', md: '200px' },
  letterSpacing: '0%',
  textTransform: 'uppercase',
  color: "#121212",
  opacity:" 0.1",
  fontFamily: "var(--font-outfit)",
}

const heroSubtitleStyles = {
  fontSize: '20px',
  fontWeight: 500,
  lineHeight: '150%',
  letterSpacing: '0px',
  maxWidth: '320px',
  position: 'absolute',
  bottom: '40px',
  left: '40px',
  zIndex: 2,
  fontFamily: "var(--font-outfit)",
}

const HeroBlock: React.FC = () => {
  return (
    <Box sx={{ pt: '72px', width: '100%', height: '100vh', xs: 2, md: 5, display: 'flex', flexDirection: 'column' }}>
        <Box marginTop="100px">
          <Typography variant="h1" sx={{...heroTitleStyles}}>
            Vitalii 
          </Typography>
          <Typography variant="h1" sx={heroTitleStyles}>
          Shutiak
          </Typography>
        </Box>        
        
        <Box 
          component={"img"}
          src="/hero-image.png"
          srcSet="/hero-image.png 1x, /hero-image@2x.png 2x"
          alt="Hero image"
          sx={{ 
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'auto',
            height: 'auto',
            maxWidth: '100%',
            maxHeight: 'calc(100vh - 72px)'
          }}
        />
        <Typography sx={heroSubtitleStyles}><span style={{ color: "#FFCC00"}}>Frontend developer</span> crafting fast, responsive, and beautifully animated web experiences.</Typography>
        {/* Прогресівний блюр з кольором */}
        <Box
          component={"div"}
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '170px',
            zIndex: 1,
            '&::before': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '100%',
              backdropFilter: 'blur(15px)',
              backgroundColor: '#D9D9D903',
              mask: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0) 100%)',
              WebkitMask: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0) 100%)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '100%',
              backdropFilter: 'blur(8px)',
              backgroundColor: '#D9D9D903',
              mask: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
              WebkitMask: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
            }
          }}
        />
    </Box>
  )
}

export default HeroBlock
