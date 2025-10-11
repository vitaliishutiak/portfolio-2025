'use client';

import React, { useRef, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { skills } from '../data/skills'
import SkillCard from './SkillCard'
import { useTranslations } from 'next-intl'
import { animateTitle } from '../lib/animations'

const SkillsBlock: React.FC = () => {
  const t = useTranslations('skills');
  const titleRef = useRef<HTMLHeadingElement>(null);
  const githubTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      animateTitle(titleRef.current);
    }
    if (githubTitleRef.current) {
      animateTitle(githubTitleRef.current);
    }
  }, []);

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 15 }, backgroundColor: '#fff' }}>
      <Box sx={{ 
        width: { xs: '100%', md: '1040px' }, 
        maxWidth: '1040px', 
        mx: 'auto', 
        px: { xs: 2, md: 0 },
      }}>
      
        <Typography
          ref={titleRef}
          component="h2"
          sx={{ 
            color: '#121212', 
            fontSize: { xs: '32px', md: '40px' }, 
            fontWeight: 500, 
            fontFamily: "var(--font-outfit)", 
            mb: { xs: '20px', md: '40px' } 
          }}
        >
          {t('title')}
        </Typography>
        
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: { xs: '16px', md: '20px' }
        }}>
          {
            skills.map((skill) => {
              const skillKey = skill.name.toLowerCase().replace(/\s+/g, '').replace('.', '');
              return (
                <SkillCard 
                  key={skill.img} 
                  img={skill.img} 
                  name={t(`${skillKey}.name`)} 
                  description={t(`${skillKey}.description`)} 
                />
              );
            })
          }
        </Box>

        <Typography
          ref={githubTitleRef}
          component="h2"
          sx={{ 
            color: '#121212', 
            fontSize: { xs: '32px', md: '40px' }, 
            fontWeight: 500, 
            fontFamily: "var(--font-outfit)", 
            mb: { xs: '20px', md: '40px' },
            mt: { xs: '40px', md: '60px' }
          }}
        >
          {t('githubMetrics')}
        </Typography>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: { xs: '16px', md: '20px' }
        }}>
          {/* GitHub Stats */}
          <Box sx={{
            borderRadius: { xs: '16px', md: '24px' },
            overflow: 'hidden',
            backgroundColor: '#1212120A',
            p: { xs: '10px', md: '20px' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Box
              component="img"
              src="https://github-readme-stats.vercel.app/api?username=vitaliishutiak&show_icons=true&theme=default&hide_border=true"
              alt="Vitalii Shutiak GitHub Statistics - Commits, PRs, Issues"
              loading="lazy"
              sx={{
                width: '100%',
                maxWidth: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </Box>

          {/* GitHub Streak */}
          <Box sx={{
            borderRadius: { xs: '16px', md: '24px' },
            overflow: 'hidden',
            backgroundColor: '#1212120A',
            p: { xs: '10px', md: '20px' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Box
              component="img"
              src="https://github-readme-streak-stats.herokuapp.com/?user=vitaliishutiak&theme=default&hide_border=true"
              alt="Vitalii Shutiak GitHub Streak - Daily Contributions"
              loading="lazy"
              sx={{
                width: '100%',
                maxWidth: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </Box>
        </Box>

        {/* Contribution Graph - на всю ширину */}
        <Box sx={{
          width: '100%',
          borderRadius: { xs: '16px', md: '24px' },
          overflow: { xs: 'auto', md: 'hidden' },
          backgroundColor: '#1212120A',
          p: { xs: '10px', md: '20px' },
          mt: { xs: '16px', md: '20px' },
          // Горизонтальний скролл на мобільних
          '&::-webkit-scrollbar': {
            height: '6px'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#e1e4e8',
            borderRadius: '3px'
          }
        }}>
          <Box
            component="img"
            src="https://ghchart.rshah.org/vitaliishutiak"
            alt="Vitalii Shutiak GitHub Contribution Calendar - Yearly Activity"
            loading="lazy"
            sx={{
              width: { xs: '800px', md: '100%' },
              height: 'auto',
              display: 'block'
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default SkillsBlock
