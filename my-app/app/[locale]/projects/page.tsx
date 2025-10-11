'use client';

import { Container, Box, Typography } from '@mui/material'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import PageTransition from '../../../components/PageTransition'
import ProjectCard from '../../../components/ProjectCard'
import { projects } from '../../../data/projects'
import { useTranslations } from 'next-intl'

export default function ProjectsPage() {
  const t = useTranslations('projects');

  return (
    <Container maxWidth={false} disableGutters>
      <Header />
      <PageTransition>
        <main>
          <Box sx={{ 
            pt: { xs: 15, md: 20 }, 
            pb: { xs: 8, md: 15 },
            px: { xs: 2, md: 5 },
            minHeight: '100vh'
          }}>
            <Box sx={{ 
              width: { xs: '100%', md: '1040px' }, 
              maxWidth: '1040px', 
              mx: 'auto'
            }}>
              <Typography 
                component="h1" 
                sx={{ 
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 600,
                  fontSize: { xs: '32px', md: '48px' },
                  lineHeight: '1.2',
                  mb: 2
                }}
              >
                {t('allProjectsTitle')}
              </Typography>
              
              <Typography 
                sx={{ 
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 400,
                  fontSize: { xs: '16px', md: '18px' },
                  lineHeight: '1.8',
                  mb: { xs: 4, md: 6 },
                  color: 'text.secondary'
                }}
              >
                {t('allProjectsDescription')}
              </Typography>

              {/* Grid of all projects */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { 
                    xs: '1fr', 
                    md: 'repeat(2, 1fr)' 
                  },
                  gap: '20px',
                  width: '100%'
                }}
              >
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    img={project.img}
                    title={project.title}
                    technologies={project.technologies}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </main>
      </PageTransition>
      <Footer />
    </Container>
  )
}



