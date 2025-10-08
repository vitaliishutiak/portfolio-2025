'use client';

import { Container, Box, Typography } from '@mui/material'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import PageTransition from '../../../components/PageTransition'
import { useTranslations } from 'next-intl'

export default function AboutPage() {
  const t = useTranslations('about');

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
              {t('title')}
            </Typography>
            
            <Typography 
              sx={{ 
                fontFamily: 'var(--font-outfit)',
                fontWeight: 400,
                fontSize: { xs: '16px', md: '18px' },
                lineHeight: '1.8',
                mb: 4,
                color: 'text.secondary'
              }}
            >
              {t('description')}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Box>
                <Typography 
                  component="h2" 
                  sx={{ 
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 600,
                    fontSize: { xs: '24px', md: '32px' },
                    lineHeight: '1.3',
                    mb: 2
                  }}
                >
                  {t('experience.title')}
                </Typography>
                <Typography 
                  sx={{ 
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 400,
                    fontSize: { xs: '16px', md: '18px' },
                    lineHeight: '1.8',
                    color: 'text.secondary'
                  }}
                >
                  {t('experience.description')}
                </Typography>
              </Box>

              <Box>
                <Typography 
                  component="h2" 
                  sx={{ 
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 600,
                    fontSize: { xs: '24px', md: '32px' },
                    lineHeight: '1.3',
                    mb: 2
                  }}
                >
                  {t('approach.title')}
                </Typography>
                <Typography 
                  sx={{ 
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 400,
                    fontSize: { xs: '16px', md: '18px' },
                    lineHeight: '1.8',
                    color: 'text.secondary'
                  }}
                >
                  {t('approach.description')}
                </Typography>
              </Box>

              <Box>
                <Typography 
                  component="h2" 
                  sx={{ 
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 600,
                    fontSize: { xs: '24px', md: '32px' },
                    lineHeight: '1.3',
                    mb: 2
                  }}
                >
                  {t('interests.title')}
                </Typography>
                <Typography 
                  sx={{ 
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 400,
                    fontSize: { xs: '16px', md: '18px' },
                    lineHeight: '1.8',
                    color: 'text.secondary'
                  }}
                >
                  {t('interests.description')}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        </main>
      </PageTransition>
      <Footer />
    </Container>
  )
}

