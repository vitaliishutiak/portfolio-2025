'use client';

import { Container, Box, Typography, Grid, Chip, Card, CardContent, Avatar, Divider } from '@mui/material'
import WorkIcon from '@mui/icons-material/Work'
import LightbulbIcon from '@mui/icons-material/Lightbulb'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CodeIcon from '@mui/icons-material/Code'
import SchoolIcon from '@mui/icons-material/School'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import StarIcon from '@mui/icons-material/Star'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import PageTransition from '../../../components/PageTransition'
import ScrollAnimations from '../../../components/ScrollAnimations'
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

  const skills = [
    { title: t('skills.frontend'), description: t('skills.frontendDesc'), color: '#2196F3' },
    { title: t('skills.tools'), description: t('skills.toolsDesc'), color: '#FF9800' },
    { title: t('skills.animation'), description: t('skills.animationDesc'), color: '#9C27B0' }
  ];

  const achievements = [
    { label: t('achievements.projects'), value: '50+', color: '#4CAF50' },
    { label: t('achievements.clients'), value: '30+', color: '#2196F3' },
    { label: t('achievements.years'), value: '3+', color: '#FF9800' },
    { label: t('achievements.technologies'), value: '15+', color: '#9C27B0' }
  ];

  const values = [
    { title: t('values.quality'), description: t('values.qualityDesc'), icon: StarIcon, color: '#4CAF50' },
    { title: t('values.collaboration'), description: t('values.collaborationDesc'), icon: WorkIcon, color: '#2196F3' },
    { title: t('values.innovation'), description: t('values.innovationDesc'), icon: LightbulbIcon, color: '#FF9800' },
    { title: t('values.reliability'), description: t('values.reliabilityDesc'), icon: EmojiEventsIcon, color: '#9C27B0' }
  ];

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
              {/* Hero Section */}
              <Box sx={{ mb: { xs: 6, md: 8 } }}>
                <Typography 
                  component="h1" 
                  className="animate-heading"
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
                className="animate-text"
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
              gap: { xs: 3, md: 4 },
              mb: { xs: 8, md: 12 }
            }}>
              {sections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <Box
                    key={index}
                    className="animate-card"
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

            {/* Technical Skills Section */}
            <Box sx={{ mb: { xs: 8, md: 12 } }}>
              <Typography 
                component="h2" 
                className="animate-heading"
                sx={{ 
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 600,
                  fontSize: { xs: '28px', md: '36px' },
                  lineHeight: '1.2',
                  mb: 2,
                  textAlign: 'center'
                }}
              >
                {t('skills.title')}
              </Typography>
              <Typography 
                sx={{ 
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 400,
                  fontSize: { xs: '16px', md: '18px' },
                  lineHeight: '1.6',
                  color: 'text.secondary',
                  textAlign: 'center',
                  mb: 4,
                  maxWidth: '600px',
                  mx: 'auto'
                }}
              >
                {t('skills.description')}
              </Typography>
              
              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: 3
              }}>
                {skills.map((skill, index) => (
                  <Box key={index} className="animate-skill-card">
                    <Card sx={{ 
                      height: '100%',
                      borderRadius: '16px',
                      border: `2px solid ${skill.color}20`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 8px 24px ${skill.color}33`,
                        border: `2px solid ${skill.color}`,
                      }
                    }}>
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Avatar sx={{ 
                            bgcolor: skill.color, 
                            width: 40, 
                            height: 40, 
                            mr: 2 
                          }}>
                            <CodeIcon sx={{ color: 'white' }} />
                          </Avatar>
                          <Typography 
                            sx={{ 
                              fontFamily: 'var(--font-outfit)',
                              fontWeight: 600,
                              fontSize: '18px',
                              color: '#121212'
                            }}
                          >
                            {skill.title}
                          </Typography>
                        </Box>
                        <Typography 
                          sx={{ 
                            fontFamily: 'var(--font-outfit)',
                            fontWeight: 400,
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: '#666'
                          }}
                        >
                          {skill.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Achievements Section */}
            <Box sx={{ mb: { xs: 8, md: 12 } }}>
              <Typography 
                component="h2" 
                className="animate-heading"
                sx={{ 
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 600,
                  fontSize: { xs: '28px', md: '36px' },
                  lineHeight: '1.2',
                  mb: 2,
                  textAlign: 'center'
                }}
              >
                {t('achievements.title')}
              </Typography>
              <Typography 
                sx={{ 
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 400,
                  fontSize: { xs: '16px', md: '18px' },
                  lineHeight: '1.6',
                  color: 'text.secondary',
                  textAlign: 'center',
                  mb: 4,
                  maxWidth: '600px',
                  mx: 'auto'
                }}
              >
                {t('achievements.description')}
              </Typography>
              
              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                gap: 3
              }}>
                {achievements.map((achievement, index) => (
                  <Box key={index} className="animate-number">
                    <Box sx={{ 
                      textAlign: 'center',
                      p: 3,
                      borderRadius: '16px',
                      backgroundColor: '#F5F5F5',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#fff',
                        transform: 'translateY(-4px)',
                        boxShadow: `0 8px 24px ${achievement.color}33`,
                      }
                    }}>
                      <Typography 
                        sx={{ 
                          fontFamily: 'var(--font-outfit)',
                          fontWeight: 700,
                          fontSize: { xs: '32px', md: '40px' },
                          color: achievement.color,
                          mb: 1
                        }}
                      >
                        {achievement.value}
                      </Typography>
                      <Typography 
                        sx={{ 
                          fontFamily: 'var(--font-outfit)',
                          fontWeight: 500,
                          fontSize: { xs: '14px', md: '16px' },
                          color: '#121212'
                        }}
                      >
                        {achievement.label}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Education Section */}
            <Box sx={{ mb: { xs: 8, md: 12 } }}>
              <Typography 
                component="h2" 
                className="animate-heading"
                sx={{ 
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 600,
                  fontSize: { xs: '28px', md: '36px' },
                  lineHeight: '1.2',
                  mb: 2,
                  textAlign: 'center'
                }}
              >
                {t('education.title')}
              </Typography>
              <Typography 
                sx={{ 
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 400,
                  fontSize: { xs: '16px', md: '18px' },
                  lineHeight: '1.6',
                  color: 'text.secondary',
                  textAlign: 'center',
                  mb: 4,
                  maxWidth: '600px',
                  mx: 'auto'
                }}
              >
                {t('education.description')}
              </Typography>
              
              <Card sx={{ 
                borderRadius: '20px',
                border: '2px solid #E0E0E0',
                overflow: 'hidden'
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Avatar sx={{ 
                      bgcolor: '#2196F3', 
                      width: 56, 
                      height: 56, 
                      mr: 3 
                    }}>
                      <SchoolIcon sx={{ color: 'white', fontSize: '28px' }} />
                    </Avatar>
                    <Box>
                      <Typography 
                        sx={{ 
                          fontFamily: 'var(--font-outfit)',
                          fontWeight: 600,
                          fontSize: '20px',
                          color: '#121212',
                          mb: 0.5
                        }}
                      >
                        {t('education.degree')}
                      </Typography>
                      <Typography 
                        sx={{ 
                          fontFamily: 'var(--font-outfit)',
                          fontWeight: 500,
                          fontSize: '16px',
                          color: '#666',
                          mb: 0.5
                        }}
                      >
                        {t('education.university')}
                      </Typography>
                      <Chip 
                        label={t('education.year')} 
                        size="small" 
                        sx={{ 
                          bgcolor: '#2196F3',
                          color: 'white',
                          fontFamily: 'var(--font-outfit)',
                          fontWeight: 500
                        }} 
                      />
                    </Box>
                  </Box>
                  
                  <Divider sx={{ my: 3 }} />
                  
                  <Typography 
                    sx={{ 
                      fontFamily: 'var(--font-outfit)',
                      fontWeight: 600,
                      fontSize: '18px',
                      color: '#121212',
                      mb: 2
                    }}
                  >
                    {t('education.certifications')}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <Chip 
                      label={t('education.cert1')} 
                      sx={{ 
                        bgcolor: '#4CAF50',
                        color: 'white',
                        fontFamily: 'var(--font-outfit)',
                        fontWeight: 500
                      }} 
                    />
                    <Chip 
                      label={t('education.cert2')} 
                      sx={{ 
                        bgcolor: '#FF9800',
                        color: 'white',
                        fontFamily: 'var(--font-outfit)',
                        fontWeight: 500
                      }} 
                    />
                    <Chip 
                      label={t('education.cert3')} 
                      sx={{ 
                        bgcolor: '#9C27B0',
                        color: 'white',
                        fontFamily: 'var(--font-outfit)',
                        fontWeight: 500
                      }} 
                    />
                  </Box>
                </CardContent>
              </Card>
            </Box>

            {/* Values Section */}
            <Box sx={{ mb: { xs: 8, md: 12 } }}>
              <Typography 
                component="h2" 
                className="animate-heading"
                sx={{ 
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 600,
                  fontSize: { xs: '28px', md: '36px' },
                  lineHeight: '1.2',
                  mb: 2,
                  textAlign: 'center'
                }}
              >
                {t('values.title')}
              </Typography>
              <Typography 
                sx={{ 
                  fontFamily: 'var(--font-outfit)',
                  fontWeight: 400,
                  fontSize: { xs: '16px', md: '18px' },
                  lineHeight: '1.6',
                  color: 'text.secondary',
                  textAlign: 'center',
                  mb: 4,
                  maxWidth: '600px',
                  mx: 'auto'
                }}
              >
                {t('values.description')}
              </Typography>
              
              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: 3
              }}>
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <Box key={index} className="animate-card">
                      <Box sx={{ 
                        display: 'flex',
                        p: 3,
                        borderRadius: '16px',
                        backgroundColor: '#F5F5F5',
                        border: `2px solid ${value.color}20`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: '#fff',
                          border: `2px solid ${value.color}`,
                          transform: 'translateY(-4px)',
                          boxShadow: `0 8px 24px ${value.color}33`,
                        }
                      }}>
                        <Avatar sx={{ 
                          bgcolor: value.color, 
                          width: 48, 
                          height: 48, 
                          mr: 3,
                          flexShrink: 0
                        }}>
                          <IconComponent sx={{ color: 'white' }} />
                        </Avatar>
                        <Box>
                          <Typography 
                            sx={{ 
                              fontFamily: 'var(--font-outfit)',
                              fontWeight: 600,
                              fontSize: '18px',
                              color: '#121212',
                              mb: 1
                            }}
                          >
                            {value.title}
                          </Typography>
                          <Typography 
                            sx={{ 
                              fontFamily: 'var(--font-outfit)',
                              fontWeight: 400,
                              fontSize: '14px',
                              lineHeight: '1.6',
                              color: '#666'
                            }}
                          >
                            {value.description}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
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

