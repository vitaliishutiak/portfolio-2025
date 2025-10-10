'use client';

import { Container, Box, Typography, TextField, Button } from '@mui/material'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import PageTransition from '../../../components/PageTransition'
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
    console.log('Calendly URL:', calendlyUrl);
    
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
      
      script.onload = () => {
        console.log('Calendly script loaded successfully');
      };
      
      script.onerror = () => {
        console.error('Failed to load Calendly script');
      };
    }
  }, [calendlyUrl])


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
                lineHeight: '1.6',
                mb: 6,
                color: 'text.secondary'
              }}
            >
              {t('description')}
            </Typography>

            <Box 
              sx={{ 
                width: '100%',
                height: { xs: '900px', md: '700px' },
                overflow: 'hidden',
                backgroundColor: '#fff',
              }}
            >
              <div 
                className="calendly-inline-widget" 
                data-url={calendlyUrl}
                style={{ minWidth: '320px', height: '100%' }}
              />
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
      </PageTransition>
      <Footer />
    </Container>
  )
}

