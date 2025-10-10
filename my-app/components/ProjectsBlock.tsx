'use client';

import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import { useTranslations } from 'next-intl'
import { Link } from '../navigation'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TypingText from './TypingText'

gsap.registerPlugin(ScrollTrigger)

const ProjectsBlock: React.FC = () => {
  const t = useTranslations('projects');
  // Беремо тільки перші 4 проекти
  const featuredProjects = projects.slice(0, 4)
  const projectsBlockRef = useRef(null)
  const firstRowRef = useRef<HTMLDivElement>(null)
  const secondRowRef = useRef<HTMLDivElement>(null)
  
  // Розділяємо на 2 блоки по 2 картки
  const firstRowProjects = featuredProjects.slice(0, 2)
  const secondRowProjects = featuredProjects.slice(2, 4)

  useEffect(() => {
    if (firstRowRef.current && secondRowRef.current) {
      const firstRowCards = Array.from(firstRowRef.current.children)
      const secondRowCards = Array.from(secondRowRef.current.children)

      // Встановлюємо початковий стан для першого ряду
      gsap.set(firstRowCards, {
        opacity: 0,
        y: -100,
        rotationX: 90,
        transformOrigin: "center bottom",
        scale: 0.8,
      })

      // Анімація появи першого ряду
      gsap.to(firstRowCards, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        scale: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: projectsBlockRef.current,
          start: 'top center',
          end: 'top 30%',
          scrub: 1,
        }
      })

      // Встановлюємо початковий стан для другого ряду
      gsap.set(secondRowCards, {
        opacity: 0,
        y: -100,
        rotationX: 90,
        transformOrigin: "center bottom",
        scale: 0.8,
      })

      // Анімація появи другого ряду
      gsap.to(secondRowCards, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        scale: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: projectsBlockRef.current,
          start: 'top top',
          end: 'top center',
          scrub: 1,
        }
      })
    }
  }, [])

  return (
    <Box ref={projectsBlockRef} component="section" sx={{ py: { xs: 6, md: 15 } }}>
      <Box sx={{ 
        width: { xs: '100%', md: '1040px' }, 
        maxWidth: '1040px', 
        mx: 'auto', 
        px: { xs: 2 },
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        gap: '20px' 
      }}>
        
        {/* Перший блок: Тайтл + 2 картки */}
        <Box sx={{ mb: { xs: 2, md: 4 } }}>
          <TypingText
            text={t('title')}
            variant="h3"
            speed={80}
            sx={{ 
              fontWeight: 500,
              color: '#121212',
              mb: '20px',
              fontSize: { xs: '24px', md: '40px' },
              fontFamily: "var(--font-outfit)",
            }}
          />
          <Box
            ref={firstRowRef}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(1, 510px)' },
              gap: '20px',
              justifyContent: { xs: 'stretch', md: 'center' },
              perspective: '1000px'
            }}
          >
            {firstRowProjects.map((project) => (
              <ProjectCard
                key={project.id}
                img={project.img}
                title={project.title}
                technologies={project.technologies}
              />
            ))}
          </Box>
        </Box>

        {/* Другий блок: 2 картки + кнопка */}
        <Box>
          <Box
            ref={secondRowRef}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(1, 510px)' },
              gap: '20px',
              justifyContent: { xs: 'stretch', md: 'center' },
              mb: 4,
              perspective: '1000px'
            }}
          >
            {secondRowProjects.map((project) => (
              <ProjectCard
                key={project.id}
                img={project.img}
                title={project.title}
                technologies={project.technologies}
              />
            ))}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
            <Button
              component={Link}
              href="/projects"
              variant="text"
              sx={{
                color: '#121212',
                fontWeight: 500,
                fontSize: { xs: '15px', md: '24px' },
                textTransform: 'none',
                fontFamily: "var(--font-outfit)",
                '&:hover': {
                  backgroundColor: 'transparent',
                  transform: 'scale(1.05)',
                  transition: ' 0.3s '
                }
              }}
            >
              {t('seeAll')} →
            </Button>
          </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default ProjectsBlock
