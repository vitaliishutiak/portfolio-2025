'use client';

import { Container, Box, Typography, TextField, Button, Link } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import PageTransition from '../../../components/PageTransition'
import ScrollAnimations from '../../../components/ScrollAnimations'
import { useTranslations } from 'next-intl'
import { useMemo, useEffect } from 'react'

export default function ContactPage() {
  const t = useTranslations('contact');

  const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js'
  const CALENDLY_STYLESHEET_HREF = 'https://assets.calendly.com/assets/external/widget.css'

  const calendlyUrl = useMemo(() => {
    return process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/vitaliishutiak/30min'
  }, [])


  useEffect(() => {
    if (!document.querySelector(`link[href="${CALENDLY_STYLESHEET_HREF}"]`)) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = CALENDLY_STYLESHEET_HREF
      document.head.appendChild(link)
    }

    if (!document.querySelector(`script[src="${CALENDLY_SCRIPT_SRC}"]`)) {
      const script = document.createElement('script')
      script.src = CALENDLY_SCRIPT_SRC
      script.async = true
      document.body.appendChild(script)
    }
  }, [calendlyUrl])


  return (
    <Container maxWidth={false} disableGutters>
      <Header />
      <PageTransition>
        <ScrollAnimations>
          <main>
        <Box sx={{ 
          pt: { xs: 15, md: 20 },
          pb: { xs: 8, md: 15 },
          minHeight: '100vh'
        }}>
          <Box sx={{ 
            width: { xs: '100%', md: '1040px' }, 
            maxWidth: '1040px', 
            mx: 'auto',
            px: { xs: 2, md: 0 },
          }}>
            {/* Main Content - Two Columns */}
            <Box sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 4, md: 5 },
              alignItems: 'stretch'
            }}>
              {/* Left Column - Text + Contact Cards */}
              <Box 
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                }}
              >
                <Typography 
                  component="h1" 
                  className="animate-heading"
                  sx={{ 
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 600,
                    fontSize: { xs: '32px', md: '48px' },
                    lineHeight: '1.2',
                  }}
                >
                  {t('title')}
                </Typography>
                
                <Typography 
                  className="animate-text"
                  sx={{ 
                    fontFamily: 'var(--font-outfit)',
                    fontWeight: 400,
                    fontSize: { xs: '16px', md: '18px' },
                    lineHeight: '1.6',
                    mb: 2,
                    color: 'text.secondary',
                  }}
                >
                  {t('description')}
                </Typography>
                
                {/* Contact Cards */}
                {/* Email Card */}
                <Box
                  component="a"
                  href="mailto:vitaliishutiak@gmail.com"
                  className="animate-card"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    padding: { xs: '20px', md: '24px' },
                    backgroundColor: '#F5F5F5',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    border: '2px solid transparent',
                    '&:hover': {
                      backgroundColor: '#fff',
                      border: '2px solid #FFCC00',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 4px 12px rgba(255, 204, 0, 0.2)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: '#FFCC00',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <EmailIcon sx={{ fontSize: '24px', color: '#000' }} />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-outfit)',
                      fontWeight: 600,
                      fontSize: { xs: '18px', md: '20px' },
                      color: '#121212',
                      lineHeight: '1.2',
                    }}
                  >
                    {t('emailTitle')}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-outfit)',
                      fontWeight: 400,
                      fontSize: { xs: '14px', md: '15px' },
                      color: '#666',
                      lineHeight: '1.5',
                    }}
                  >
                    {t('emailDescription')}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-outfit)',
                      fontWeight: 500,
                      fontSize: { xs: '14px', md: '15px' },
                      color: '#FFCC00',
                      mt: 1,
                    }}
                  >
                    vitaliishutiak@gmail.com
                  </Typography>
                </Box>

                {/* Phone Card */}
                <Box
                  component="a"
                  href="tel:+380632212534"
                  className="animate-card"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    padding: { xs: '20px', md: '24px' },
                    backgroundColor: '#F5F5F5',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    border: '2px solid transparent',
                    '&:hover': {
                      backgroundColor: '#fff',
                      border: '2px solid #FFCC00',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 4px 12px rgba(255, 204, 0, 0.2)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: '#FFCC00',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PhoneIcon sx={{ fontSize: '24px', color: '#000' }} />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-outfit)',
                      fontWeight: 600,
                      fontSize: { xs: '18px', md: '20px' },
                      color: '#121212',
                      lineHeight: '1.2',
                    }}
                  >
                    {t('phoneTitle')}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-outfit)',
                      fontWeight: 400,
                      fontSize: { xs: '14px', md: '15px' },
                      color: '#666',
                      lineHeight: '1.5',
                    }}
                  >
                    {t('phoneDescription')}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-outfit)',
                      fontWeight: 500,
                      fontSize: { xs: '14px', md: '15px' },
                      color: '#FFCC00',
                      mt: 1,
                    }}
                  >
                    +380 (63) 221-2534
                  </Typography>
                </Box>
              </Box>

              {/* Right Column - Calendly */}
              <Box 
                sx={{ 
                  width: '100%',
                  minHeight: { xs: '600px', md: '100%' },
                  height: '100%',
                  overflow: 'hidden',
                  backgroundColor: '#fff',
                  borderRadius: '16px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                }}
              >
                <div 
                  className="calendly-inline-widget" 
                  data-url={calendlyUrl}
                  style={{ minWidth: '320px', height: '100%', minHeight: '600px' }}
                />
              </Box>
            </Box>

            {/* <Box 
              component="form" 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 3,
                maxWidth: '600px'
              }}
            >
              <TextField
                label={t('form.name')}
                variant="outlined"
                fullWidth
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    fontFamily: 'var(--font-outfit)',
                  },
                  '& .MuiInputLabel-root': {
                    fontFamily: 'var(--font-outfit)',
                  }
                }}
              />
              
              <TextField
                label={t('form.email')}
                variant="outlined"
                type="email"
                fullWidth
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    fontFamily: 'var(--font-outfit)',
                  },
                  '& .MuiInputLabel-root': {
                    fontFamily: 'var(--font-outfit)',
                  }
                }}
              />
              
              <TextField
                label={t('form.message')}
                variant="outlined"
                multiline
                rows={6}
                fullWidth
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    fontFamily: 'var(--font-outfit)',
                  },
                  '& .MuiInputLabel-root': {
                    fontFamily: 'var(--font-outfit)',
                  }
                }}
              />
              
                <Button
                  variant="contained"
                  size="large"
                  className="animate-button"
                  sx={{
                  backgroundColor: '#FFCC00',
                  color: '#000',
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 500,
                  fontSize: '18px',
                  textTransform: 'none',
                  borderRadius: '32px',
                  padding: '12px 32px',
                  alignSelf: 'flex-start',
                  '&:hover': {
                    backgroundColor: '#FFD700',
                  }
                }}
              >
                {t('form.submit')}
              </Button>
            </Box> */}
          </Box>
        </Box>
        </main>
        </ScrollAnimations>
      </PageTransition>
      <Footer />
    </Container>
  )
}

