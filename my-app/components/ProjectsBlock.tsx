import React from 'react'
import { Box, Container, Typography, Grid, Button } from '@mui/material'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

const ProjectsBlock: React.FC = () => {
  // Беремо тільки перші 4 проекти
  const featuredProjects = projects.slice(0, 4)
  
  // Розділяємо на 2 блоки по 2 картки
  const firstRowProjects = featuredProjects.slice(0, 2)
  const secondRowProjects = featuredProjects.slice(2, 4)

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 15 } }}>
      <Box sx={{ 
        width: { xs: '100%', md: '1040px' }, 
        maxWidth: '1040px', 
        mx: 'auto', 
        px: { xs: 2, md: 0 },
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        gap: '20px' 
      }}>
        
        {/* Перший блок: Тайтл + 2 картки */}
        <Box sx={{ mb: { xs: 2, md: 4 } }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 500,
              color: '#121212',
              mb: '20px',
              fontSize: { xs: '24px', md: '40px' },
              fontFamily: "var(--font-outfit)",
            }}
          >
            Latest Projects
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(1, 510px)' },
              gap: '20px',
              justifyContent: { xs: 'stretch', md: 'center' }
            }}
          >
            {firstRowProjects.map((project) => (
              <ProjectCard
                key={project.id}
                img={project.img}
                title={project.title}
                technologies={project.technologies}
              />
            ))}
          </Box>
        </Box>

        {/* Другий блок: 2 картки + кнопка */}
        <Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(1, 510px)' },
              gap: '20px',
              justifyContent: { xs: 'stretch', md: 'center' },
              mb: 4
            }}
          >
            {secondRowProjects.map((project) => (
              <ProjectCard
                key={project.id}
                img={project.img}
                title={project.title}
                technologies={project.technologies}
              />
            ))}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
            <Button
              variant="text"
              sx={{
                color: '#121212',
                fontWeight: 500,
                fontSize: { xs: '15px', md: '24px' },
                textTransform: 'none',
                fontFamily: "var(--font-outfit)",
                '&:hover': {
                  backgroundColor: 'transparent',
                  transform: 'scale(1.05)',
                  transition: ' 0.3s '
                }
              }}
            >
              See All →
            </Button>
          </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default ProjectsBlock
