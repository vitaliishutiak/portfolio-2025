'use client';

import React, { useEffect, useRef } from 'react'
import { Box, Typography } from '@mui/material'
import HowItsWorksCard from './HowItsWorksCard'
import { howItsWork } from '../data/howItsWork'
import { useTranslations } from 'next-intl'
import { animateHowItWorksBlock, animateTitle } from '../lib/animations'
import { useMediaQuery } from '@mui/material'

const HowItsWorksBlock: React.FC = () => {
  const t = useTranslations('howItWorks');
  const textBlockRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isMobile = useMediaQuery('(max-width: 600px)');

  useEffect(() => {
    if (textBlockRef.current && sectionRef.current) {
      animateHowItWorksBlock(textBlockRef.current, sectionRef.current);
    }
    if (titleRef.current && !isMobile) {
      animateTitle(titleRef.current);
    }
  }, []);

  return (
    <Box ref={sectionRef} component="section" sx={{ py: { xs: 6, md: 15 }, backgroundColor: '#121212' }}>
      <Box sx={{ 
        width: { xs: '100%', md: '1040px' }, 
        maxWidth: '1040px', 
        mx: 'auto', 
        px: { xs: 2, md: 0 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: '32px', md: '24px' }
      }}>
        <Box ref={textBlockRef} sx={{ width: '100%', maxWidth: { xs: '100%', md: '510px' } }}>
            <Typography sx={{ 
              color: '#FFCC00', 
              fontSize: { xs: '16px', md: '20px' }, 
              fontWeight: 500,
              fontFamily: "var(--font-outfit)",
              mb: { xs: 2, md: 3 }
            }}>
                {t('subtitle')}
            </Typography>
            <Typography
              ref={titleRef}
              component="h2"
              sx={{ 
                color: '#fff', 
                fontSize: { xs: '24px', md: '40px' }, 
                fontWeight: 500,
                fontFamily: "var(--font-outfit)",
                lineHeight: { xs: '130%', md: '120%' }
              }}
            >
              {t('title')}
            </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '16px', md: '24px' } }}>
            {
                howItsWork.map((item) => (
                    <HowItsWorksCard 
                      key={item.number} 
                      number={item.number} 
                      title={t(`step${item.number}.title`)} 
                      description={t(`step${item.number}.description`)} 
                    />
                ))
            }
        </Box>
    </Box>
    </Box>
  )
}

export default HowItsWorksBlock
