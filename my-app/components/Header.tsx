'use client';

import React, { useTransition } from 'react'
import { AppBar, Toolbar, Typography, Box, Button, Select, MenuItem } from '@mui/material'
import ContactButton from './ContactButton'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname, useRouter, Link } from '../navigation'
import { GB, UA } from 'country-flag-icons/react/3x2'

const Header: React.FC = () => {
  const t = useTranslations('header');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const navButtonStyles = {
    fontFamily: 'var(--font-outfit)',
    fontWeight: 500,
    fontSize: '15px',
    lineHeight: '100%',
    letterSpacing: '0%',
    textTransform: 'none'
  };

  const handleLanguageChange = (newLocale: string) => {
    // Don't change if it's the same locale
    if (newLocale === locale) {
      return;
    }
    
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  // MenuProps to prevent body shift when Select opens
  const selectMenuProps = {
    disableScrollLock: true,
  };

  // Language selector component with flags
  const LanguageSelector = () => {
    const FlagIcon = ({ country }: { country: string }) => {
      const Flag = country === 'en' ? GB : UA;
      return (
        <Box sx={{ width: '24px', height: '16px', display: 'flex', alignItems: 'center', borderRadius: '2px', overflow: 'hidden' }}>
          <Flag style={{ width: '100%', height: '100%', display: 'block' }} />
        </Box>
      );
    };

    return (
      <Select
        value={locale}
        onChange={(e) => handleLanguageChange(e.target.value)}
        variant="outlined"
        disabled={isPending}
        MenuProps={selectMenuProps}
        renderValue={(value) => (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <FlagIcon country={value} />
            <Box component="span" sx={{ fontSize: '14px', fontWeight: 500 }}>
              {value.toUpperCase()}
            </Box>
          </Box>
        )}
        sx={{
        fontFamily: 'var(--font-outfit)',
        fontWeight: 500,
        fontSize: '14px',
        minWidth: '95px',
        height: '40px',
        borderRadius: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        transition: 'all 0.2s ease-in-out',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 1)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
        },
        '&.Mui-focused': {
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
        },
        '& .MuiSelect-select': {
          paddingTop: '8px',
          paddingBottom: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }
      }}
    >
      <MenuItem 
        value="en" 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1.5,
          fontFamily: 'var(--font-outfit)',
          fontWeight: 500,
          py: 1.5,
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
          '&.Mui-selected': {
            backgroundColor: 'rgba(25, 118, 210, 0.08)',
            '&:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.12)',
            }
          }
        }}
      >
        <Box sx={{ width: '28px', height: '19px', display: 'flex', alignItems: 'center', borderRadius: '3px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <GB style={{ width: '100%', height: '100%', display: 'block' }} />
        </Box>
        <Box component="span">English</Box>
      </MenuItem>
      <MenuItem 
        value="uk" 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1.5,
          fontFamily: 'var(--font-outfit)',
          fontWeight: 500,
          py: 1.5,
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
          '&.Mui-selected': {
            backgroundColor: 'rgba(25, 118, 210, 0.08)',
            '&:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.12)',
            }
          }
        }}
      >
        <Box sx={{ width: '28px', height: '19px', display: 'flex', alignItems: 'center', borderRadius: '3px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <UA style={{ width: '100%', height: '100%', display: 'block' }} />
        </Box>
        <Box component="span">Українська</Box>
      </MenuItem>
    </Select>
    );
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      zIndex: 100,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backdropFilter: 'blur(10px)'
    }}>
      <Box sx={{ px: { xs: 2, md: 5 } }}>
        <Toolbar disableGutters sx={{ height: '72px', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Typography 
            component="div" 
            sx={{ 
              fontFamily: 'var(--font-outfit)',
              fontWeight: 500,
              fontSize: { xs: '18px', md: '24px' },
              lineHeight: '24px',
              letterSpacing: '0%'
            }}
          >
            Vitalii Shutiak
          </Typography>
          
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 5, alignItems: 'center' }}>
            <Button color="inherit" component={Link} href="/" sx={navButtonStyles}>
              {t('projects')}
            </Button>
            <Button color="inherit" component={Link} href="/about" sx={navButtonStyles}>
              {t('about')}
            </Button>
            <Button color="inherit" component={Link} href="/contact" sx={navButtonStyles}>
              {t('contact')}
            </Button>
          </Box>
          
          {/* Right Section: Language Selector + Contact Button */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <LanguageSelector />
            <ContactButton />
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  )
}

export default Header
