'use client';

import { Container, Box, Typography, Button, Chip, Avatar, Divider } from '@mui/material'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import PageTransition from '../../../../components/PageTransition'
import ScrollAnimations from '../../../../components/ScrollAnimations'
import { projects, Project } from '../../../../data/projects'
import { useTranslations } from 'next-intl'
import { Link } from '../../../../navigation'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import LaunchIcon from '@mui/icons-material/Launch'

export default function ProjectDetailPage() {
  const t = useTranslations('projects');
  const params = useParams();
  const projectId = parseInt(params.id as string);
  
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === projectId);
    setProject(foundProject || null);
  }, [projectId]);

  if (!project) {
    return (
      <Container maxWidth={false} disableGutters>
        <Header />
        <PageTransition>
          <Box sx={{ 
            pt: { xs: 15, md: 20 }, 
            pb: { xs: 8, md: 15 },
            px: { xs: 2, md: 5 },
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Typography variant="h4">Project not found</Typography>
          </Box>
        </PageTransition>
        <Footer />
      </Container>
    );
  }

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
              {/* Back Button */}
              <Link href="/projects">
                <Button
                  startIcon={<ArrowBackIcon />}
                  className="animate-button"
                  sx={{
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 500,
                    fontSize: '14px',
                    textTransform: 'none',
                    mb: 4,
                    color: '#FFCC00',
                    '&:hover': {
                      backgroundColor: '#FFCC0020'
                    }
                  }}
                >
                  Back to Projects
                </Button>
              </Link>

              {/* Project Header */}
              <Box sx={{ mb: { xs: 6, md: 8 } }}>
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
                  {project.title}
                </Typography>
                
                <Typography 
                  className="animate-text"
                  sx={{ 
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 400,
                    fontSize: { xs: '16px', md: '18px' },
                    lineHeight: '1.8',
                    mb: 3,
                    color: 'text.secondary',
                    maxWidth: '800px'
                  }}
                >
                  {t(`project${projectId}.longDescription`)}
                </Typography>

                {/* Project Links */}
                <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
                  {project.liveUrl ? (
                    <Button
                      variant="contained"
                      startIcon={<LaunchIcon />}
                      href={project.liveUrl}
                      target="_blank"
                      className="animate-button"
                      sx={{
                        fontFamily: 'var(--font-outfit)',
                        fontWeight: 500,
                        fontSize: '14px',
                        textTransform: 'none',
                        borderRadius: '25px',
                        px: 3,
                        py: 1,
                        backgroundColor: '#FFCC00',
                        '&:hover': {
                          backgroundColor: '#FFD700'
                        }
                      }}
                    >
                      {t('projectDetails.viewProject')}
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      startIcon={<LaunchIcon />}
                      disabled
                      className="animate-button"
                      sx={{
                        fontFamily: 'var(--font-outfit)',
                        fontWeight: 500,
                        fontSize: '14px',
                        textTransform: 'none',
                        borderRadius: '25px',
                        px: 3,
                        py: 1,
                        borderColor: '#999',
                        color: '#999',
                        cursor: 'not-allowed'
                      }}
                    >
                      Private
                    </Button>
                  )}
                </Box>

                {/* Project Info */}
                <Box sx={{ 
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                  gap: 3,
                  mb: 4
                }}>
                  <Box>
                    <Typography sx={{ 
                      fontFamily: 'var(--font-outfit)',
                      fontWeight: 600,
                      fontSize: '16px',
                      color: '#121212',
                      mb: 1
                    }}>
                      {t('projectDetails.role')}
                    </Typography>
                    <Typography sx={{ 
                      fontFamily: 'var(--font-outfit)',
                      fontWeight: 400,
                      fontSize: '14px',
                      color: '#666'
                    }}>
                      {project.role}
                    </Typography>
                  </Box>
                  {project.client && (
                    <Box>
                      <Typography sx={{ 
                        fontFamily: 'var(--font-outfit)',
                        fontWeight: 600,
                        fontSize: '16px',
                        color: '#121212',
                        mb: 1
                      }}>
                        {t('projectDetails.client')}
                      </Typography>
                      <Typography sx={{ 
                        fontFamily: 'var(--font-outfit)',
                        fontWeight: 400,
                        fontSize: '14px',
                        color: '#666'
                      }}>
                        {project.client}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Box>

              {/* Main Image */}
              <Box sx={{ mb: { xs: 6, md: 8 } }}>
                <Box
                  component="img"
                  src={project.images[0]}
                  alt={project.title}
                  className="animate-image"
                  sx={{
                    width: '100%',
                    height: { xs: '300px', md: '500px' },
                    objectFit: 'cover',
                    display: 'block',
                    borderRadius: '16px'
                  }}
                />
              </Box>


              {/* Results */}
              <Box sx={{ mt: { xs: 6, md: 8 } }}>
                <Typography 
                  component="h3" 
                  sx={{ 
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 600,
                    fontSize: '24px',
                    lineHeight: '1.3',
                    mb: 3,
                    color: '#121212'
                  }}
                >
                  {t('projectDetails.results')}
                </Typography>
                <Box sx={{ 
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                  gap: 3
                }}>
                  {t.raw(`project${projectId}.results`).map((result: string, index: number) => (
                    <Box key={index} sx={{ 
                      p: 3,
                      borderRadius: '12px',
                      backgroundColor: '#F5F5F5',
                      border: '2px solid #4CAF50',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#fff',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px #4CAF5033'
                      }
                    }}>
                      <Typography sx={{ 
                        fontFamily: 'var(--font-outfit)',
                        fontWeight: 500,
                        fontSize: '14px',
                        color: '#121212',
                        textAlign: 'center'
                      }}>
                        {result}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Technologies */}
              <Box sx={{ mt: { xs: 6, md: 8 } }}>
                <Typography 
                  component="h3" 
                  sx={{ 
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 600,
                    fontSize: '24px',
                    lineHeight: '1.3',
                    mb: 3,
                    color: '#121212'
                  }}
                >
                  {t('projectDetails.technologies')}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.technologies.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      sx={{
                        fontFamily: 'var(--font-outfit)',
                        fontWeight: 500,
                        fontSize: '12px',
                        backgroundColor: '#FFCC00',
                        color: '#000',
                        '&:hover': {
                          backgroundColor: '#FFD700'
                        }
                      }}
                    />
                  ))}
                </Box>
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
