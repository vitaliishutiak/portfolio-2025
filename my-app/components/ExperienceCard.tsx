import React from 'react'
import { Box, Typography } from '@mui/material'

interface ExperienceCardProps {
    id: number
    company: string
    date: string
    position: string
    active: boolean
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ id, company, date, position, active }) => {
    return (
        <Box sx={{
            width: '100%',
            backgroundColor: active ? '#FFCC00' : '#FFFFFF0A',
            borderRadius: '24px',
            padding: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'var(--font-outfit)'
        }}>
            <Typography sx={{ fontSize: '20px', fontWeight: 500,color: active ? '#000' : '#fff' }}>{company}</Typography>
            <Typography sx={{ fontSize: '15px', fontWeight: 400,color: active ? '#000' : '#fff' }}>{date}</Typography>
            <Typography sx={{ fontSize: '15px', fontWeight: 400,color: active ? '#000' : '#fff' }}>{position}</Typography>
        </Box>
    )
}

export default ExperienceCard