'use client';

import React, { useTransition, useRef, useEffect, useState } from 'react'
import { AppBar, Toolbar, Typography, Box, Button, Select, MenuItem, Drawer, IconButton } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname, useRouter, Link } from '../navigation'
import { animateHeader } from '../lib/animations'
import { projects } from '../data/projects'
import { HEADER_TOOLBAR_HEIGHT_PX } from '../lib/contentWidth'

const Header: React.FC = () => {
  const t = useTranslations('header');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const headerRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const projectsCount = projects.length;

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
    fontFamily: 'var(--framer-font-family)',
    fontWeight: 600,
    fontSize: '15px',
    lineHeight: '110%',
    letterSpacing: '-0.04em',
    textTransform: 'none',
    transition: '0.2s',
    '&:hover': {
      backgroundColor: 'transparent',
      transform: 'none',
    },
  };

  const mobileNavButtonStyles = {
    fontFamily: 'var(--framer-font-family)',
    fontWeight: 600,
    fontSize: '32px',
    textAlign: 'center',
    justifyContent: 'center',
    textTransform: 'none',
    px: 0,
    borderRadius: 0,
    transition: 'all 0.3s ease',
  };

  const socialIconStyles = {
    color: '#121212',
    backgroundColor: '#fff',
    width: '56px',
    height: '56px',
  };

  const PHONE_PRETTY = '+38(096)221-25-34';

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
    // Animate header only on home page
    if (headerRef.current && pathname === '/') {
      animateHeader(headerRef.current);
    }
  }, [pathname]);

  // Animated Burger Menu Component (2 lines → X)
  const AnimatedBurger = ({ isOpen }: { isOpen: boolean }) => {
    const W = 60;
    const H = 22; // total icon height
    const EDGE = 4; // top/bottom padding inside icon
    const LINE_H = 2;
    // Move each line by half of the distance between their centers so they meet perfectly.
    const centerDistance = H - 2 * EDGE - LINE_H;
    const translateY = Math.round(centerDistance / 2);
    // proportional angle (not full 45deg): atan(translateY / (W/2))
    const angleDeg = Math.round((Math.atan(translateY / (W / 2)) * 180) / Math.PI);

    return (
      <Box
        sx={{
          width: `${W}px`,
          height: `${H}px`,
          position: 'relative',
          cursor: 'pointer',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: `${EDGE}px`,
            height: '2px',
            bgcolor: 'text.primary',
            borderRadius: '99px',
            transformOrigin: 'center',
            transition: 'transform 0.32s cubic-bezier(0.22, 1, 0.36, 1)',
            transform: isOpen
              ? `translateY(${translateY}px) rotate(${angleDeg}deg)`
              : 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: `${EDGE}px`,
            height: '2px',
            bgcolor: 'text.primary',
            borderRadius: '99px',
            transformOrigin: 'center',
            transition: 'transform 0.32s cubic-bezier(0.22, 1, 0.36, 1)',
            transform: isOpen
              ? `translateY(-${translateY}px) rotate(-${angleDeg}deg)`
              : 'none',
          }}
        />
      </Box>
    );
  };

  const localeShortLabel = (code: string) =>
    code === 'uk' ? 'UK' : code.toUpperCase();

  const languageSelectSx = {
    fontFamily: 'var(--framer-font-family)',
    fontWeight: 600,
    fontSize: '15px',
    lineHeight: '110%',
    letterSpacing: '-0.04em',
    minWidth: 'auto',
    height: 'auto',
    borderRadius: 0,
    color: 'text.primary',
    bgcolor: 'transparent',
    boxShadow: 'none',
    '& .MuiSelect-select': {
      p: 0,
      minHeight: 'auto',
      display: 'flex',
      alignItems: 'center',
    },
    '& .MuiSelect-icon': {
      color: 'text.primary',
    },
  } as const;

  // Language selector — як навігація/лого, без бордера
  const LanguageSelector = () => (
      <Select
        value={locale}
        onChange={(e) => handleLanguageChange(e.target.value)}
        variant="standard"
        disableUnderline
        disabled={isPending}
        MenuProps={selectMenuProps}
        renderValue={(value) => (
          <Box component="span" sx={languageSelectSx}>
            {localeShortLabel(String(value))}
          </Box>
        )}
        sx={languageSelectSx}
      >
      <MenuItem
        value="en"
        sx={{
          fontFamily: 'var(--framer-font-family)',
          fontWeight: 600,
          fontSize: '15px',
          letterSpacing: '-0.04em',
          lineHeight: '110%',
          py: 1,
          '&.Mui-selected': {
            backgroundColor: 'action.selected',
          },
        }}
      >
        EN
      </MenuItem>
      <MenuItem
        value="uk"
        sx={{
          fontFamily: 'var(--framer-font-family)',
          fontWeight: 600,
          fontSize: '15px',
          letterSpacing: '-0.04em',
          lineHeight: '110%',
          py: 1,
          '&.Mui-selected': {
            backgroundColor: 'action.selected',
          },
        }}
      >
        UK
      </MenuItem>
      <MenuItem
        value="pl"
        sx={{
          fontFamily: 'var(--framer-font-family)',
          fontWeight: 600,
          fontSize: '15px',
          letterSpacing: '-0.04em',
          lineHeight: '110%',
          py: 1,
          '&.Mui-selected': {
            backgroundColor: 'action.selected',
          },
        }}
      >
        PL
      </MenuItem>
    </Select>
  );

  return (
    <>
      {/* Mobile overlay (under header) */}
      <Box
        onClick={() => setMobileMenuOpen(false)}
        sx={{
          display: { xs: mobileMenuOpen ? 'block' : 'none', md: 'none' },
          position: 'fixed',
          top: `${HEADER_TOOLBAR_HEIGHT_PX}px`,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: 'rgba(0,0,0,0.45)',
          zIndex: 1200,
          transition: 'opacity 0.32s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
        aria-hidden
      />

      <AppBar ref={headerRef} position="static" color="transparent" elevation={0} sx={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        // Must be above MUI Modal/Drawer layers to stay clickable
        zIndex: 1400,
        color: 'text.primary',
        // Keep header clean (don't get darker when menu is open)
        backgroundColor: 'background.default',
        backdropFilter: 'blur(7px)',
        WebkitBackdropFilter: 'blur(7px)',
        height: `${HEADER_TOOLBAR_HEIGHT_PX}px`,
        minHeight: `${HEADER_TOOLBAR_HEIGHT_PX}px`,
      }}>
        <Box sx={{ px: { xs: '16px', md: '60px' } }}>
          <Toolbar
            disableGutters
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: `${HEADER_TOOLBAR_HEIGHT_PX}px`,
              minHeight: `${HEADER_TOOLBAR_HEIGHT_PX}px`,
              py: 0,
            }}
          >
            {/* Left: Logo */}
            <Box sx={{ flex: '0 0 auto', display: 'flex', alignItems: 'center' }}>
              <Typography
                component={Link}
                href="/"
                sx={{
                  fontFamily: 'var(--framer-font-family)',
                  fontWeight: 600,
                  fontSize: { xs: '22px', md: '20px' },
                  lineHeight: '110%',
                  letterSpacing: '-0.04em',
                  color: 'text.primary',
                  textDecoration: 'none',
                }}
              >
                Vitalii Shutiak
              </Typography>
            </Box>

            {/* Center: Navigation */}
            <Box
              sx={{
                flex: '1 1 auto',
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                alignItems: 'center',
                gap: 5,
              }}
            >
              {navItems.slice(1).map((item) => {
                const isProjects = item.href === '/projects';
                return (
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
                      position: 'relative',
                    }}
                  >
                    <Box component="span" sx={{ position: 'relative', display: 'inline-flex' }}>
                      {item.label}
                      {isProjects ? (
                        <Box
                          component="span"
                          sx={{
                            position: 'absolute',
                            top: -2,
                            right: -8,
                            fontSize: '10px',
                            fontWeight: 600,
                            letterSpacing: '-0.04em',
                            lineHeight: '100%',
                            color: 'rgba(18,18,18,0.6)',
                          }}
                        >
                          {projectsCount}
                        </Box>
                      ) : null}
                    </Box>
                  </Button>
                );
              })}
            </Box>

            {/* Right: Language + Burger */}
            <Box
              sx={{
                flex: '0 0 auto',
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 6,
                alignItems: 'center',
              }}
            >
              <LanguageSelector />

              {/* Burger Menu - Mobile only */}
              <IconButton
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                size="small"
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  border: 0,
                  borderColor: 'transparent',
                  borderRadius: 0,
                  px: 1,
                  py: 0.75,
                  '&:hover': { bgcolor: 'transparent' },
                }}
                aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              >
                <AnimatedBurger isOpen={mobileMenuOpen} />
              </IconButton>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="top"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        SlideProps={{
          easing: {
            enter: 'cubic-bezier(0.22, 1, 0.36, 1)',
            exit: 'cubic-bezier(0.22, 1, 0.36, 1)',
          },
          timeout: { enter: 380, exit: 320 },
        }}
        ModalProps={{ hideBackdrop: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          zIndex: 1300,
          '& .MuiDrawer-paper': {
            width: '100%',
            backgroundColor: '#F5F5F5',
            top: `${HEADER_TOOLBAR_HEIGHT_PX}px`,
            // No visual "gap" under the header
            padding: '0px 20px 22px',
            boxShadow: 'none',
            borderRadius: 0,
            maxHeight: `calc(85vh - ${HEADER_TOOLBAR_HEIGHT_PX}px)`,
            overflowY: 'auto',
          },
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          minHeight: 'auto',
          fontFamily: 'var(--framer-font-family)'
        }}>
          {/* Navigation Links */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 0.75,
            pt: 2,
          }}>
            {navItems.map((item) => {
              return (
                <Button
                  key={item.href}
                  component={Link}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  sx={{
                    ...mobileNavButtonStyles,
                    color: '#121212',
                    borderLeft: '0px solid transparent',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: '#121212',
                      paddingLeft: 0,
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          <Box sx={{ mt: 'auto', pt: 3 }}>
            {/* Phone / Email / Legal */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 1.25,
                pb: 2.5,
              }}
            >
              <Typography
                component="a"
                href={`tel:${PHONE_PRETTY.replace(/[^\d+]/g, '')}`}
                sx={{
                  fontFamily: 'var(--framer-font-family)',
                  fontWeight: 600,
                  fontSize: '18px',
                  letterSpacing: '-0.02em',
                  color: '#121212',
                  textDecoration: 'none',
                }}
              >
                {PHONE_PRETTY}
              </Typography>

              <Typography
                component="a"
                href="mailto:vitaliishutiak@gmail.com"
                sx={{
                  fontFamily: 'var(--framer-font-family)',
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '110%',
                  letterSpacing: '-0.04em',
                  color: '#121212',
                  textDecoration: 'underline',
                  textUnderlineOffset: '6px',
                }}
              >
                vitaliishutiak@gmail.com
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, pt: 1 }}>
                <Button
                  component={Link}
                  href="/privacy-policy"
                  onClick={() => setMobileMenuOpen(false)}
                  sx={{
                    fontFamily: 'var(--framer-font-family)',
                    fontWeight: 500,
                    fontSize: '14px',
                    textTransform: 'none',
                    color: '#121212',
                    p: 0,
                    minWidth: 'auto',
                    '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' },
                  }}
                >
                  {t('privacyPolicy')}
                </Button>
                <Button
                  component={Link}
                  href="/terms-of-service"
                  onClick={() => setMobileMenuOpen(false)}
                  sx={{
                    fontFamily: 'var(--framer-font-family)',
                    fontWeight: 500,
                    fontSize: '14px',
                    textTransform: 'none',
                    color: '#121212',
                    p: 0,
                    minWidth: 'auto',
                    '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' },
                  }}
                >
                  {t('termsOfService')}
                </Button>
              </Box>
            </Box>

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
                    sx={{ ...socialIconStyles, backgroundColor: '#fff' }}
                  >
                    <IconComponent sx={{ fontSize: '28px' }} />
                  </IconButton>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  )
}

export default Header
