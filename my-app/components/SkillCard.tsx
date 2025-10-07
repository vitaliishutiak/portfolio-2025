import { Box, Typography } from '@mui/material'
import React from 'react'

interface SkillCardProps {
  img: number
  name: string
  description: string
}

const SkillCard: React.FC<SkillCardProps> = ({ img, name, description }) => {
  return (
    <Box sx={{
        width: '100%',
        maxWidth: {xs: '100%', md: '510px'},
        display: 'flex',
        gap: '24px',
        borderRadius: '24px',
        backgroundColor: '#121212',
        p: '20px'
    }}>
        <Box>
            <Box 
            component={'img'} 
            src={`/skills/${img}.png`}
            alt={name}
            sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            }}
            />
            
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <Typography sx={{
            color: '#fff',
            fontSize: '24px',
            fontWeight: 500,
            fontFamily: 'var(--font-outfit)',
            lineHeight: '100%',
            letterSpacing: '0%',
            textTransform: 'none',
          }}>{name}</Typography>
          <Typography sx={{
            color: '#fff',
            fontSize: '15px',
            fontWeight: 400,
            fontFamily: 'var(--font-outfit)',
            lineHeight: '150%',
          }}>{description}</Typography>
    </Box>
        </Box>
        
  )
}

export default SkillCard