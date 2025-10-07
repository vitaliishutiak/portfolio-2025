import React from 'react'
import { Box, Typography, Chip } from '@mui/material'

interface ProjectCardProps {
  img: string
  title: string
  technologies: string[]
}

const ProjectCard: React.FC<ProjectCardProps> = ({ img, title, technologies }) => {
  return (
    <Box
      sx={{
        borderRadius: { xs: '16px', md: '24px' },
        width: '100%',
        maxWidth: { xs: '100%', md: '510px' },
        height: { xs: 'auto', md: '100%' },
        maxHeight: { xs: '300px', md: '400px' },
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
        '&:hover': {
          transform: 'translateY(-8px)',
        }
      }}
    >
      {/* Зображення проекту */}
      <Box
        component="img"
        src={img}
        alt={title}
        sx={{
          width: '100%',
          height: { xs: '300px', md: '400px' },
          objectFit: 'cover',
          display: 'block',
          borderRadius: { xs: '16px', md: '24px' },
          fontFamily: "var(--font-outfit)",
        }}
      />
      
      {/* Контент картки - тільки прогресівний блюр без білого фону */}
      <Box sx={{ 
        p: '20px 20px 15px 20px',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1
      }}>
        {/* Прогресівний блюр поверх тексту */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backdropFilter: 'blur(20px)',
              backgroundColor: '#D9D9D903',
              mask: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,1) 100%)',
              WebkitMask: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,1) 100%)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backdropFilter: 'blur(8px)',
              backgroundColor: '#D9D9D903',
              mask: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%)',
              WebkitMask: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%)',
            }
          }}
        />
        
        {/* Назва проекту */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            fontSize: { xs: '18px', md: '20px' },
            color: '#fff',
            mb: '12px',
            lineHeight: '100%',
            position: 'relative',
            zIndex: 2,
            fontFamily: "var(--font-outfit)",
          }}
        >
          {title}
        </Typography>
        
        {/* Технології */}
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: { xs: 0.5, md: 1 },
          position: 'relative',
          zIndex: 2
        }}>
          {technologies.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              sx={{
                backgroundColor: 'transparent',
                color: '#fff',
                border: '0.5px solid #fff',
                fontWeight: 500,
                fontSize: { xs: '10px', md: '11px' },
                height: { xs: '24px', md: '28px' },
                fontFamily: "var(--font-outfit)",
                '& .MuiChip-label': {
                  px: { xs: '12px', md: '20px' },
                }
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default ProjectCard
