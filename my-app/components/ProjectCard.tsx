import React from 'react'
import { Box, Typography, Chip } from '@mui/material'

interface ProjectCardProps {
  img: string
  title: string
  technologies: string[]
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(({ img, title, technologies }, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        borderRadius: { xs: '16px', md: '24px' },
        width: '100%',
        maxWidth: { xs: '100%', md: '510px' },
        height: { xs: 'auto', md: '100%' },
        maxHeight: { xs: '300px', md: '400px' },
        overflow: 'hidden',
        transition: '0.3s',
        cursor: 'pointer',
        position: 'relative',
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Зображення проекту */}
      <Box
        component="img"
        src={img}
        alt={`${title} - Project showcase`}
        loading="lazy"
        sx={{
          width: '100%',
          objectFit: 'cover',
          display: 'block',
          borderRadius: { xs: '16px', md: '24px' },
          fontFamily: "var(--font-outfit)",
          transition: '0.3s',
          '&:hover': {
            transform: 'scale(1.05)',
            transition: '0.3s',
          }
        }}
      />
      
      {/* Контент картки - тільки прогресівний блюр без білого фону */}
      {/* <Box sx={{ 
        p: '20px 20px 15px 20px',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1
      }}>
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
        /> */}
        
        {/* Назва проекту */}
        {/* <Typography
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
         */}
        {/* Технології */}
        {/* <Box sx={{ 
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
      </Box> */}
    </Box>
  )
})

ProjectCard.displayName = 'ProjectCard'

export default ProjectCard
