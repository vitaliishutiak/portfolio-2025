import React from 'react'
import { Box, Typography } from '@mui/material'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger);

interface ExperienceCardProps {
    id: number
    company: string
    date: string
    position: string
    active: boolean
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ id, company, date, position, active }) => {

    const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

    return (
        <Box ref={cardRef} sx={{
            width: '100%',
            backgroundColor: active ? '#FFCC00' : '#FFFFFF0A',
            borderRadius: '24px',
            padding: '20px 23px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '20px',
            alignItems: 'center',
            fontFamily: 'var(--font-outfit)'
        }}>
            <Typography sx={{ fontSize: '20px', fontWeight: 500, color: active ? '#000' : '#fff' }}>{company}</Typography>
            <Typography sx={{ fontSize: '15px', fontWeight: 400, color: active ? '#000' : '#fff', textAlign: 'right', minWidth: '120px' }}>{date}</Typography>
            <Typography sx={{ fontSize: '15px', fontWeight: 400, color: active ? '#000' : '#fff', textAlign: 'right', minWidth: '150px' }}>{position}</Typography>
        </Box>
    )
}

export default ExperienceCard