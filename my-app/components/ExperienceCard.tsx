import React, { useRef, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { animateCard } from '../lib/animations'

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
            const cleanup = animateCard(cardRef.current);
            
            // Cleanup при розмонтуванні компонента
            return cleanup;
        }
    }, []);

    return (
        <Box ref={cardRef} sx={{
            width: '100%',
            backgroundColor: active ? '#FFCC00' : '#FFFFFF0A',
            borderRadius: { xs: '16px', md: '24px' },
            padding: { xs: '16px', md: '20px 23px' },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr' },
            gap: { xs: '8px', md: '20px' },
            alignItems: 'center',
            fontFamily: 'var(--font-outfit)'
        }}>
            <Typography sx={{ 
                fontSize: { xs: '18px', md: '20px' }, 
                fontWeight: 500, 
                color: active ? '#000' : '#fff'
            }}>
                {company}
            </Typography>
            <Typography sx={{ 
                fontSize: { xs: '14px', md: '15px' }, 
                fontWeight: 400, 
                color: active ? '#000' : '#fff', 
                textAlign: { xs: 'left', md: 'right' }
            }}>
                {date}
            </Typography>
            <Typography sx={{ 
                fontSize: { xs: '14px', md: '15px' }, 
                fontWeight: 400, 
                color: active ? '#000' : '#fff', 
                textAlign: { xs: 'left', md: 'right' }
            }}>
                {position}
            </Typography>
        </Box>
    )
}

export default ExperienceCard