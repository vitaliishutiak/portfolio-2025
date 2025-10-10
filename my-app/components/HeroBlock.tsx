'use client';

import React, { useEffect, useRef } from 'react'
import { Box, Typography } from '@mui/material'
import { useTranslations } from 'next-intl'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const heroTitleStyles = {
  fontSize: { xs: '80px', sm: '130px', md: '200px' },
  textAlign: 'center',
  fontWeight: 600,
  lineHeight: { xs: '100px', sm: '130px', md: '200px' },
  letterSpacing: '0%',
  textTransform: 'uppercase',
  color: "#121212",
  opacity:" 0.1",
  fontFamily: "var(--font-outfit)",
}


const heroSubtitleStyles = {
  fontSize: '20px',
  fontWeight: 500,
  lineHeight: '150%',
  letterSpacing: '0px',
  maxWidth: '320px',
  position: 'absolute',
  bottom: '40px',
  left: '40px',
  zIndex: 2,
  color: {xs: '#fff', md: '#121212'},
  fontFamily: "var(--font-outfit)",
}

const HeroBlock: React.FC = () => {
  const t = useTranslations('hero');

  const heroBlockRef = useRef(null);
  const titleTopRef = useRef(null);
  const titleBottomRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  // const imageSmileRef = useRef(null);

  useEffect(() => {
    if (titleTopRef.current && titleBottomRef.current && descriptionRef.current && imageRef.current) {
      // Створюємо timeline для послідовних анімацій
      const tl = gsap.timeline({ delay: 0.3 });

      // Анімації заголовків одночасно
      tl.fromTo(titleTopRef.current, {
        opacity: 0,
        x: -200
      }, {
        opacity: 0.1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
      }, 0) // позиція 0 - початок timeline
      
      .fromTo(titleBottomRef.current, {
        opacity: 0,
        x: 200
      }, {
        opacity: 0.1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
      }, 0) // позиція 0 - одночасно з попередньою
    
      // Анімація зображення після заголовків
      .fromTo(imageRef.current, {
        scale: 1.2,
      }, {
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
      }, 0) 

      // Анімація опису після зображення
      .fromTo(descriptionRef.current, {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
      }) // автоматично після попередньої

      // Паралакс ефект - картинка їде вниз при скролі
      gsap.fromTo(imageRef.current, 
        { y: 0 },
        {
          yPercent: 30,
          scrollTrigger: {
            trigger: heroBlockRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        }
      )

      // // Синхронізуємо рух для зображення з усмішкою
      // gsap.fromTo(imageSmileRef.current, 
      //   { y: 0 },
      //   {
      //     yPercent: 30,
      //     scrollTrigger: {
      //       trigger: heroBlockRef.current,
      //       start: 'top top',
      //       end: 'bottom top',
      //       scrub: true,
      //     }
      //   }
      // )

      // // Анімація появи усмішки при скролі
      // gsap.fromTo(imageSmileRef.current,
      //   { opacity: 0 },
      //   {
      //     opacity: 1,
      //     scrollTrigger: {
      //       trigger: heroBlockRef.current,
      //       start: 'top top',
      //       end: 'center top',
      //       scrub: true,
      //     }
      //   }
      // )
      
      // Паралакс для "Vitalii" - їде вправо-вверх
      gsap.fromTo(titleTopRef.current,
        { x: 0, y: 0 },
        {
          y: -100,
          x: 100,
          scrollTrigger: {
            trigger: heroBlockRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
      
      // Паралакс для "Shutiak" - їде вліво-вверх
      gsap.fromTo(titleBottomRef.current,
        { x: 0, y: 0 },
        {
          y: -100,
          x: -100,
          scrollTrigger: {
            trigger: heroBlockRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
      
    }

  }, [])

  
  
  return (
    <Box ref={heroBlockRef} 
    sx={{ 
      position: 'relative',
      pt: '72px', 
      width: '100%', 
      height: '100vh', 
      xs: 2, 
      md: 5, 
      display: 'flex', 
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
        <Box marginTop="100px">
          <Typography variant="h1" sx={{...heroTitleStyles}} ref={titleTopRef}>
            Vitalii 
          </Typography>
          <Typography variant="h1" sx={heroTitleStyles} ref={titleBottomRef}>
          Shutiak
          </Typography>
        </Box>        
        
        {/* Базове зображення */}
        <Box 
          ref={imageRef}
          component={"img"}
          src="hero-image@2x.png"
          alt="Hero image"
          sx={{ 
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'auto',
            height: 'auto',
            maxWidth: '100%',
            maxHeight: 'calc(100vh - 72px)'
          }}
        />
        
        {/* Зображення з усмішкою - з'являється при скролі */}
        {/* <Box 
          ref={imageSmileRef}
          component={"img"}
          src="hero-image@2x.png"
          alt="Hero image with smile"
          sx={{ 
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'auto',
            height: 'auto',
            maxWidth: '100%',
            maxHeight: 'calc(100vh - 72px)',
            opacity: 0,
          }}
        /> */}
        <Typography sx={heroSubtitleStyles} ref={descriptionRef}>
          {t.rich('title', {
            highlight: (chunks) => <span style={{ color: "#FFCC00" }}>{chunks}</span>
          })}
        </Typography>
        {/* Прогресівний блюр з кольором */}
        <Box
          component={"div"}
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '170px',
            zIndex: 1,
            '&::before': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '100%',
              backdropFilter: 'blur(15px)',
              backgroundColor: '#D9D9D903',
              mask: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0) 100%)',
              WebkitMask: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0) 100%)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '100%',
              backdropFilter: 'blur(8px)',
              backgroundColor: '#D9D9D903',
              mask: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
              WebkitMask: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)',
            }
          }}
        />
    </Box>
  )
}

export default HeroBlock
