'use client';

import { Container, Box, Typography, Button, Chip } from '@mui/material'
import { useState } from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import PageTransition from '../../../components/PageTransition'
import ScrollAnimations from '../../../components/ScrollAnimations'
import ProjectCard from '../../../components/ProjectCard'
import { projects, Project } from '../../../data/projects'
import { useTranslations } from 'next-intl'
import { Link } from '../../../navigation'

export default function ProjectsPage() {
  const t = useTranslations('projects');
  const [activeFilter, setActiveFilter] = useState<'all' | 'ukrainian' | 'international'>('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filterButtons = [
    { key: 'all', label: t('filters.all') },
    { key: 'ukrainian', label: t('filters.ukrainian') },
    { key: 'international', label: t('filters.international') }
  ];

  return (
    <Container maxWidth={false} disableGutters>
      <Header />
      <PageTransition>
        <ScrollAnimations>
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
                className="animate-heading"
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
                className="animate-text"
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

              {/* Filter Buttons */}
              <Box sx={{ 
                display: 'flex', 
                gap: 2, 
                mb: { xs: 4, md: 6 },
                flexWrap: 'wrap',
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}>
                {filterButtons.map((filter) => (
                  <Button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key as 'all' | 'ukrainian' | 'international')}
                    variant={activeFilter === filter.key ? 'contained' : 'outlined'}
                    className="animate-button"
                    sx={{
                      fontFamily: 'var(--font-outfit)',
                      fontWeight: 500,
                      fontSize: '14px',
                      textTransform: 'none',
                      borderRadius: '25px',
                      px: 3,
                      py: 1,
                      minWidth: '120px',
                      backgroundColor: activeFilter === filter.key ? '#FFCC00' : 'transparent',
                      color: activeFilter === filter.key ? '#000' : '#FFCC00',
                      borderColor: '#FFCC00',
                      '&:hover': {
                        backgroundColor: activeFilter === filter.key ? '#FFD700' : '#FFCC0020',
                        borderColor: '#FFCC00',
                      }
                    }}
                  >
                    {filter.label}
                  </Button>
                ))}
              </Box>

              {/* Grid of filtered projects */}
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
                {filteredProjects.map((project) => (
                  <Link key={project.id} href={`/projects/${project.id}`}>
                    <Box className="animate-project-card">
                      <ProjectCard
                        img={project.img}
                        title={project.title}
                        technologies={project.technologies}
                      />
                    </Box>
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
        </main>
        </ScrollAnimations>
      </PageTransition>
      <Footer />
    </Container>
  )
}





