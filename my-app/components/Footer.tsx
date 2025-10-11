'use client';

import React, { useRef, useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { Link } from '../navigation'
import { useTranslations } from 'next-intl'
import { animateScaleUp } from '../lib/animations'

const Footer: React.FC = () => {
  const t = useTranslations('footer');
  const ctaTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (ctaTextRef.current) {
      animateScaleUp(ctaTextRef.current);
    }
  }, []);

  const navItems = [
    {
      label: t('navigation.home'),
      href: '/'
    },
    {
      label: t('navigation.projects'),
      href: '/projects'
    },
    {
      label: t('navigation.about'),
      href: '/about'
    },
    {
      label: t('navigation.contact'),
      href: '/contact'
    }
  ]

  const socialItems = [
    {
      label: t('social.linkedin'),
      href: 'https://linkedin.com',
      ariaLabel: "Visit Vitalii Shutiak's LinkedIn profile"
    },
    {
      label: t('social.github'),
      href: 'https://github.com',
      ariaLabel: "Visit Vitalii Shutiak's GitHub profile"
    },
    {
      label: t('social.twitter'),
      href: 'https://twitter.com',
      ariaLabel: "Visit Vitalii Shutiak's Twitter profile"
    }
  ]

  return (
    <Box component="footer" sx={{ py: { xs: 6, md: 15 }, backgroundColor: '#121212' }}>
      <Box sx={{ 
        width: { xs: '100%', md: '1040px' }, 
        maxWidth: '1040px', 
        mx: 'auto', 
        px: { xs: 2, md: 0 },
        fontFamily: 'var(--font-outfit)'
      }}>
        {/* CTA Section */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: { xs: '24px', md: '32px' }, 
          mb: { xs: '40px', md: '60px' },
          alignItems: { xs: 'center', md: 'flex-start' },
          textAlign: { xs: 'center', md: 'left' },
          maxWidth: { xs: '100%', md: '600px' }
        }}>
          <Typography 
            ref={ctaTextRef}
            component="h2"
            sx={{ 
              fontSize: { xs: '28px', md: '40px' }, 
              fontWeight: 500, 
              color: '#fff',
              fontFamily: 'var(--font-outfit)',
              lineHeight: { xs: '1.3', md: '1.2' }
            }}
          >
            <Box component="span" sx={{ color: '#FFFFFF99' }}>{t('ctaPart1')}</Box>{t('ctaPart2')}
          </Typography>
          <Button 
            component={Link} 
            href="/contact"
            sx={{ 
              width: { xs: '100%', md: 'auto' },
              maxWidth: { xs: '100%', md: '140px' },
              backgroundColor: '#FFCC00', 
              color: '#000', 
              fontSize: { xs: '16px', md: '18px' },
              fontWeight: 500, 
              borderRadius: '32px', 
              padding: { xs: '10px 32px', md: '8px 32px' },
              fontFamily: 'var(--font-outfit)', 
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#FFD700',
              }
            }}
          >
            {t('contact')}
          </Button>
        </Box>

        {/* Divider */}
        <Box sx={{ 
          height: '1px', 
          backgroundColor: '#FFFFFF1A', 
          mb: { xs: '32px', md: '40px' } 
        }} />

        {/* Navigation and Social Links */}
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
          gap: { xs: '32px 24px', md: '40px' },
          textAlign: { xs: 'left', md: 'left' }
        }}>
          {/* Navigation Links */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: { xs: '12px', md: '20px' } 
          }}>
            <Typography sx={{ 
              color: '#FFFFFF99', 
              fontSize: { xs: '12px', md: '14px' }, 
              fontWeight: 500,
              mb: { xs: '4px', md: '8px' },
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Navigation
            </Typography>
            {navItems.map((item) => (
              <Box
                key={item.label}
                component={Link}
                href={item.href}
                sx={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-outfit)',
                  fontSize: { xs: '14px', md: '16px' },
                  fontWeight: 400,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: '#FFCC00',
                    transform: 'translateX(4px)',
                  }
                }}
              >
                {item.label}
              </Box>
            ))}
          </Box>

          {/* Social Links */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: { xs: '12px', md: '20px' } 
          }}>
            <Typography sx={{ 
              color: '#FFFFFF99', 
              fontSize: { xs: '12px', md: '14px' }, 
              fontWeight: 500,
              mb: { xs: '4px', md: '8px' },
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Social
            </Typography>
            {socialItems.map((item) => (
              <Box
                key={item.label}
                component="a"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.ariaLabel}
                sx={{
                  color: '#fff',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-outfit)',
                  fontSize: { xs: '14px', md: '16px' },
                  fontWeight: 400,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: '#FFCC00',
                    transform: 'translateX(4px)',
                  }
                }}
              >
                {item.label}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
