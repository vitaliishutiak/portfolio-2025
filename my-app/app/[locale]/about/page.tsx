'use client';

import { Container, Box, Typography } from '@mui/material'
import WorkIcon from '@mui/icons-material/Work'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import PageTransition from '../../../components/PageTransition'
import { useTranslations } from 'next-intl'

export default function AboutPage() {
  const t = useTranslations('about');

  const sections = [
    {
      icon: WorkIcon,
      title: t('experience.title'),
      description: t('experience.description'),
      color: '#FFCC00'
    },
    {
      icon: LightbulbIcon,
      title: t('approach.title'),
      description: t('approach.description'),
      color: '#FF6B6B'
    },
    {
      icon: FavoriteIcon,
      title: t('interests.title'),
      description: t('interests.description'),
      color: '#4ECDC4'
    }
  ];

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
            {/* Hero Section */}
            <Box sx={{ mb: { xs: 6, md: 8 } }}>
              <Typography 
                component="h1" 
                sx={{ 
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 600,
                  fontSize: { xs: '32px', md: '48px' },
                  lineHeight: '1.2',
                  mb: 3
                }}
              >
                {t('title')}
              </Typography>
              
              <Typography 
                sx={{ 
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 400,
                  fontSize: { xs: '18px', md: '20px' },
                  lineHeight: '1.8',
                  color: 'text.secondary',
                  maxWidth: '800px'
                }}
              >
                {t('description')}
              </Typography>
            </Box>

            {/* Cards Grid */}
            <Box sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: { xs: 3, md: 4 }
            }}>
              {sections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      padding: { xs: '24px', md: '32px' },
                      backgroundColor: '#F5F5F5',
                      borderRadius: '20px',
                      transition: 'all 0.3s ease',
                      border: '2px solid transparent',
                      '&:hover': {
                        backgroundColor: '#fff',
                        border: `2px solid ${section.color}`,
                        transform: 'translateY(-8px)',
                        boxShadow: `0 8px 24px ${section.color}33`,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '16px',
                        backgroundColor: section.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 1
                      }}
                    >
                      <IconComponent sx={{ fontSize: '28px', color: '#fff' }} />
                    </Box>
                    <Typography 
                      component="h2" 
                      sx={{ 
                        fontFamily: 'var(--font-outfit)',
                        fontWeight: 600,
                        fontSize: { xs: '20px', md: '24px' },
                        lineHeight: '1.3',
                        mb: 1,
                        color: '#121212'
                      }}
                    >
                      {section.title}
                    </Typography>
                    <Typography 
                      sx={{ 
                        fontFamily: 'var(--font-outfit)',
                        fontWeight: 400,
                        fontSize: { xs: '14px', md: '16px' },
                        lineHeight: '1.8',
                        color: '#666'
                      }}
                    >
                      {section.description}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
        </main>
      </PageTransition>
      <Footer />
    </Container>
  )
}

