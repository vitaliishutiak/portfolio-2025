'use client';

import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { Link } from '../navigation'
import { useTranslations } from 'next-intl'

const Footer: React.FC = () => {
  const t = useTranslations('footer');

  const navItems = [
    {
      label: t('navigation.home'),
      href: '/'
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
      href: 'https://linkedin.com'
    },
    {
      label: t('social.github'),
      href: 'https://github.com'
    },
    {
      label: t('social.twitter'),
      href: 'https://twitter.com'
    }
  ]

  return (
    <Box component="footer" sx={{ py: { xs: 6, md: 15 }, backgroundColor: '#121212' }}>
      <Box sx={{ 
        width: { xs: '100%', md: '1040px' }, 
        maxWidth: '1040px', 
        mx: 'auto', 
        px: { xs: 2, md: 0 },
        display: 'flex',
        gap: { xs: '32px', md: '40px' },
        fontFamily: 'var(--font-outfit)'
      }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '32px', md: '40px' }, width: '100%', maxWidth: '510px' }}>
          <Typography sx={{ fontSize: { xs: '28px', md: '40px' }, fontWeight: 500, color: '#fff' }}>
            {t('cta')}
          </Typography>
          <Button 
            component={Link} 
            href="/contact"
            sx={{ 
              width: '100%', 
              maxWidth: '113px', 
              backgroundColor: '#FFCC00', 
              color: '#000', 
              fontSize: '18px', 
              fontWeight: 500, 
              borderRadius: '32px', 
              padding: '5px 24px', 
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
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '32px', md: '40px' } }}>
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontFamily: 'var(--font-outfit)',
                fontSize: '18px',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
            >
              {item.label}
            </Link>
          ))}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '32px', md: '40px' } }}>
          {socialItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontFamily: 'var(--font-outfit)',
                fontSize: '18px',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
            >
              {item.label}
            </a>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
