'use client';

import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'

interface PreloaderProps {
  onComplete: () => void
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setIsVisible(false)
            setTimeout(onComplete, 500) // Delay before calling onComplete
          }, 200)
          return 100
        }
        return prev + Math.random() * 15 + 5 // Random increment for smooth progress
      })
    }, 100)

    return () => clearInterval(timer)
  }, [onComplete])

  if (!isVisible) return null

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#121212',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Animated Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 20% 50%, #FFCC0020 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #FFCC0010 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, #FFCC0015 0%, transparent 50%)
          `,
          animation: 'pulse 3s ease-in-out infinite'
        }}
      />

      {/* Main Content */}
      <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* Progress Bar */}
        <Box
          sx={{
            width: { xs: '280px', md: '400px' },
            height: '4px',
            backgroundColor: '#333',
            borderRadius: '2px',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <Box
            sx={{
              width: `${progress}%`,
              height: '100%',
              backgroundColor: '#FFCC00',
              borderRadius: '2px',
              transition: 'width 0.3s ease',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                animation: 'shimmer 1.5s infinite'
              }
            }}
          />
        </Box>

        {/* Progress Text */}
        <Typography
          sx={{
            fontFamily: 'var(--font-outfit)',
            fontSize: '14px',
            fontWeight: 500,
            color: '#FFCC00',
            mt: 2
          }}
        >
          {Math.round(progress)}%
        </Typography>
      </Box>

      {/* Floating Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '20px',
          height: '20px',
          backgroundColor: '#FFCC00',
          borderRadius: '50%',
          opacity: 0.6,
          animation: 'float 3s ease-in-out infinite'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '15px',
          height: '15px',
          backgroundColor: '#FFCC00',
          borderRadius: '50%',
          opacity: 0.4,
          animation: 'float 2.5s ease-in-out infinite reverse'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '30%',
          left: '20%',
          width: '12px',
          height: '12px',
          backgroundColor: '#FFCC00',
          borderRadius: '50%',
          opacity: 0.5,
          animation: 'float 2s ease-in-out infinite'
        }}
      />

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes glow {
          from { text-shadow: 0 0 20px #FFCC00; }
          to { text-shadow: 0 0 30px #FFCC00, 0 0 40px #FFCC00; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </Box>
  )
}

export default Preloader
