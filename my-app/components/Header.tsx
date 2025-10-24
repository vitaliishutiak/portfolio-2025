'use client';

import React, { useTransition, useRef, useEffect, useState } from 'react'
import { AppBar, Toolbar, Typography, Box, Button, Select, MenuItem, Drawer, IconButton } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import CloseIcon from '@mui/icons-material/Close'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname, useRouter, Link } from '../navigation'
import { GB, PL, UA } from 'country-flag-icons/react/3x2'
import { animateHeader } from '../lib/animations'

const Header: React.FC = () => {
  const t = useTranslations('header');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const headerRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Навігаційні пункти
  const navItems = [
    { label: t('home'), href: '/' },
    { label: t('projects'), href: '/projects' },
    { label: t('about'), href: '/about' },
    { label: t('contact'), href: '/contact' },
  ];

  // Соціальні мережі та контакти
  const socialItems = [
    { icon: LinkedInIcon, href: 'https://linkedin.com/in/vitaliishutiak', label: 'LinkedIn' },
    { icon: GitHubIcon, href: 'https://github.com/vitaliishutiak', label: 'GitHub' },
    { icon: TwitterIcon, href: 'https://twitter.com/vitaliishutiak', label: 'Twitter' },
  ];

  // Стилі для навігації
  const navButtonStyles = {
    fontFamily: 'var(--font-outfit)',
    fontWeight: 500,
    fontSize: '15px',
    lineHeight: '100%',
    letterSpacing: '0%',
    textTransform: 'none',
    transition: '0.2s',
    '&:hover': {
      backgroundColor: 'transparent',
      transform: 'translateY(-2px)',
      transition: '0.2s',
    },
  };

  const mobileNavButtonStyles = {
    fontFamily: 'var(--font-outfit)',
    fontWeight: 500,
    fontSize: '24px',
    textAlign: 'left',
    justifyContent: 'flex-start',
    textTransform: 'none',
    paddingLeft: '20px',
    borderRadius: 0,
    transition: 'all 0.3s ease',
  };

  const socialIconStyles = {
    color: '#121212',
    backgroundColor: '#fff',
    width: '56px',
    height: '56px',
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

  useEffect(() => {
    if (headerRef.current) {
      animateHeader(headerRef.current);
    }
  }, []);

  // Animated Burger Menu Component
  const AnimatedBurger = ({ isOpen }: { isOpen: boolean }) => (
    <Box
      sx={{
        width: '28px',
        height: '20px',
        position: 'relative',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '3px',
          backgroundColor: '#121212',
          borderRadius: '2px',
          transition: 'all 0.3s ease',
          transform: isOpen ? 'rotate(45deg) translateY(9px)' : 'none',
        }}
      />
      <Box
        sx={{
          width: '100%',
          height: '3px',
          backgroundColor: '#121212',
          borderRadius: '2px',
          transition: 'all 0.3s ease',
          opacity: isOpen ? 0 : 1,
        }}
      />
      <Box
        sx={{
          width: '100%',
          height: '3px',
          backgroundColor: '#121212',
          borderRadius: '2px',
          transition: 'all 0.3s ease',
          transform: isOpen ? 'rotate(-45deg) translateY(-9px)' : 'none',
        }}
      />
    </Box>
  );

  // Language selector component with flags
  const LanguageSelector = () => {
    const FlagIcon = ({ country }: { country: string }) => {
      const Flag = country === 'en' ? GB : country === 'uk' ? UA : PL;
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
      <MenuItem 
        value="pl" 
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
          <PL style={{ width: '100%', height: '100%', display: 'block' }} />
        </Box>
        <Box component="span">Polski</Box>
      </MenuItem>
    </Select>
    );
  };

  return (
    <>
      <AppBar ref={headerRef} position="static" color="transparent" elevation={0} sx={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 100,
        backgroundColor: { xs: 'rgba(255, 255, 255, 0.95)', md: 'rgba(255, 255, 255, 0.5)' },
        backdropFilter: { xs: 'none', md: 'blur(10px)' }
      }}>
        <Box sx={{ px: { xs: 2, md: 5 } }}>
          <Toolbar disableGutters sx={{ height: '72px', justifyContent: 'space-between' }}>
            {/* Logo */}
            <Typography 
              component={Link} 
              href="/"
              sx={{ 
                fontFamily: 'var(--font-outfit)',
                fontWeight: 500,
                fontSize: '24px',
                lineHeight: '24px',
                letterSpacing: '0%'
              }}
            >
              Vitalii Shutiak
            </Typography>
            
            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 5, alignItems: 'center' }}>
              {navItems.slice(1).map((item) => (
                <Button 
                  key={item.href}
                  color="inherit" 
                  component={Link} 
                  href={item.href} 
                  sx={{
                    ...navButtonStyles,
                    color: pathname === item.href ? '#FFCC00' : 'inherit',
                    borderBottom: pathname === item.href ? '2px solid #FFCC00' : 'none',
                    borderRadius: 0,
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
            
            {/* Right Section: Language Selector + CV Button (Desktop) + Burger (Mobile) */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <LanguageSelector />
              
              {/* CV Button - Desktop only */}
              <Button
                component="a"
                href="/vitalii-shutiak-cv.pdf"
                download
                variant="contained"
                startIcon={<DownloadIcon />}
                aria-label="Download CV"
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  backgroundColor: '#FFCC00',
                  color: '#000',
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 500,
                  fontSize: '14px',
                  textTransform: 'none',
                  borderRadius: '20px',
                  padding: '8px 20px',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: '#FFD700',
                    boxShadow: '0 2px 8px rgba(255, 204, 0, 0.3)',
                  },
                }}
              >
                CV
              </Button>

              {/* Burger Menu - Mobile only */}
              <IconButton
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                sx={{ display: { xs: 'flex', md: 'none' }, padding: '8px' }}
                aria-label="Open mobile menu"
              >
                <AnimatedBurger isOpen={mobileMenuOpen} />
              </IconButton>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(10px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            padding: '20px',
            boxShadow: 'none',
          },
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          height: '100%',
          fontFamily: 'var(--font-outfit)'
        }}>
          {/* Close Button */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 10 }}>
            <Typography sx={{ fontSize: '24px', fontWeight: 500, color: '#fff', lineHeight: '24px',
                letterSpacing: '0%', fontFamily: 'var(--font-outfit)' }}>
              Vitalii Shutiak
            </Typography>
            <IconButton onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <CloseIcon sx={{ fontSize: '32px', color: '#fff' }} />
            </IconButton>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 2,
          }}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Button
                  key={item.href}
                  component={Link}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  sx={{
                    ...mobileNavButtonStyles,
                    color: isActive ? '#FFCC00' : '#fff',
                    borderLeft: isActive ? '2px solid #FFCC00' : '2px solid transparent',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: '#FFCC00',
                      paddingLeft: '24px',
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          

          {/* CV Button in Mobile Menu */}
          <Box sx={{ mt: 'auto', pt: 3 }}>
            {/* Social Media Icons */}
            <Box sx={{ 
              display: 'flex', 
              gap: 3,
              justifyContent: 'center',
              mb: 4,
            }}>
              {socialItems.map((social) => {
                const IconComponent = social.icon;
                return (
                  <IconButton
                    key={social.label}
                    component="a"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.label} profile`}
                    sx={socialIconStyles}
                  >
                    <IconComponent sx={{ fontSize: '28px' }} />
                  </IconButton>
                );
              })}
            </Box>
            
            <Button
              component="a"
              href="/cv.pdf"
              download
              fullWidth
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={() => setMobileMenuOpen(false)}
              sx={{
                backgroundColor: '#FFCC00',
                color: '#000',
                fontFamily: 'var(--font-outfit)',
                fontWeight: 500,
                fontSize: '18px',
                textTransform: 'none',
                borderRadius: '20px',
                padding: '12px 24px',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#FFD700',
                },
              }}
            >
              Download CV
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  )
}

export default Header
