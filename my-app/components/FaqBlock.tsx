'use client';

import React, { useState, useEffect, useRef } from 'react'
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import { useTranslations } from 'next-intl'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { animateTitle, animateFaqBlock, animateFaqAccordions } from '../lib/animations'

const FaqBlock: React.FC = () => {
  const t = useTranslations('faq')
  const [expanded, setExpanded] = useState<string | false>(false)
  const textBlockRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  const faqItems = [
    { question: t('question1'), answer: t('answer1') },
    { question: t('question2'), answer: t('answer2') },
    { question: t('question3'), answer: t('answer3') },
    { question: t('question4'), answer: t('answer4') },
    { question: t('question5'), answer: t('answer5') },
    { question: t('question6'), answer: t('answer6') },
    { question: t('question7'), answer: t('answer7') }
  ]

  const accordionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cleanups: (() => void)[] = [];
    
    if (textBlockRef.current && sectionRef.current) {
      const cleanup = animateFaqBlock(textBlockRef.current, sectionRef.current);
      if (cleanup) cleanups.push(cleanup);
    }
    if (titleRef.current) {
      const cleanup = animateTitle(titleRef.current);
      if (cleanup) cleanups.push(cleanup);
    }
    if (descriptionRef.current) {
      const cleanup = animateTitle(descriptionRef.current);
      if (cleanup) cleanups.push(cleanup);
    }
    if (accordionsRef.current) {
      const cleanup = animateFaqAccordions(accordionsRef.current);
      if (cleanup) cleanups.push(cleanup);
    }
    
    // Cleanup при розмонтуванні компонента
    return () => {
      cleanups.forEach(cleanup => cleanup());
    };
  }, []);

  return (
    <Box ref={sectionRef} component="section" sx={{ py: { xs: 6, md: 15 } }}>
      <Box sx={{ 
        width: { xs: '100%', md: '1040px' }, 
        maxWidth: '1040px', 
        mx: 'auto', 
        px: { xs: 2, md: 0 },
        fontFamily: 'var(--font-outfit)'
      }}>
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: '40px', md: '20px' },
          alignItems: 'start'
        }}>
          {/* Left column - Description */}
          <Box 
            ref={textBlockRef}
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: '16px', md: '20px' },
              position: { md: 'sticky' },
              top: { md: '100px' }
            }}>
            <Typography
              ref={titleRef}
              component="h2"
              sx={{ 
                fontSize: { xs: '32px', md: '40px' }, 
                fontWeight: 500, 
                color: '#121212',
                fontFamily: "var(--font-outfit)"
              }}
            >
              {t('title')}
            </Typography>
            <Typography
              ref={descriptionRef}
              sx={{ 
                fontSize: { xs: '22px', md: '20px' }, 
                lineHeight: 1.6,
                color: '#121212',
                fontFamily: 'var(--font-outfit)'
              }}
            >
              {t('description')}
            </Typography>
          </Box>

          {/* Right column - Accordions */}
          <Box ref={accordionsRef} sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqItems.map((item, index) => (
              <Accordion
                className="faq-accordion"
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  boxShadow: 'none',
                  border: '1px solid #E5E5E5',
                  borderRadius: '12px !important',
                  '&:before': {
                    display: 'none',
                  },
                  '&.Mui-expanded': {
                    margin: 0,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === `panel${index}` ? (
                      <RemoveIcon sx={{ color: '#121212', fontSize: '24px' }} />
                    ) : (
                      <AddIcon sx={{ color: '#121212', fontSize: '24px' }} />
                    )
                  }
                  sx={{
                    minHeight: '64px',
                    padding: { xs: '16px', md: '20px 24px' },
                    '& .MuiAccordionSummary-content': {
                      margin: 0,
                    },
                    '&.Mui-expanded': {
                      minHeight: '64px',
                    },
                  }}
                >
                  <Typography sx={{ 
                    fontSize: { xs: '16px', md: '18px' }, 
                    fontWeight: 500,
                    color: '#121212',
                    fontFamily: 'var(--font-outfit)'
                  }}>
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    padding: { xs: '0 16px 16px', md: '0 24px 24px' },
                    borderTop: '1px solid #E5E5E5',
                    paddingTop: { xs: '16px', md: '20px' },
                  }}
                >
                  <Typography sx={{ 
                    fontSize: { xs: '14px', md: '16px' },
                    lineHeight: 1.6,
                    color: '#666666',
                    fontFamily: 'var(--font-outfit)'
                  }}>
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default FaqBlock
