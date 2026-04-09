'use client';

import React, { useCallback, useEffect, useState } from 'react'
import { Box } from '@mui/material'

interface PreloaderProps {
  onComplete: () => void
}

const NAME = 'Vitalii Shutiak'
const CHAR_STAGGER_MS = 72
const LETTER_DURATION_S = 0.52
const PAUSE_BEFORE_EXIT_MS = 480
const EXIT_DURATION_MS = 820

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'letters' | 'exit' | 'done'>('letters')
  const chars = NAME.split('')

  const handleExitEnd = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (e.propertyName !== 'transform') return
      setPhase('done')
      onComplete()
    },
    [onComplete]
  )

  useEffect(() => {
    if (phase !== 'letters') return
    const lastLetterDelay = (chars.length - 1) * CHAR_STAGGER_MS
    const total =
      lastLetterDelay + LETTER_DURATION_S * 1000 + PAUSE_BEFORE_EXIT_MS
    const t = window.setTimeout(() => setPhase('exit'), total)
    return () => clearTimeout(t)
  }, [phase, chars.length])

  if (phase === 'done') return null

  return (
    <Box
      onTransitionEnd={phase === 'exit' ? handleExitEnd : undefined}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000000',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        transform: phase === 'exit' ? 'translateY(-100%)' : 'translateY(0)',
        transition: `transform ${EXIT_DURATION_MS}ms cubic-bezier(0.76, 0, 0.24, 1)`,
        willChange: phase === 'exit' ? 'transform' : 'auto',
      }}
    >
      <Box
        component="span"
        sx={{
          fontFamily: 'var(--framer-font-family)',
          fontSize: { xs: 'clamp(28px, 8vw, 52px)', md: 'clamp(40px, 5vw, 72px)' },
          fontWeight: 600,
          color: '#ffffff',
          textAlign: 'center',
          lineHeight: 1.15,
          px: 2,
        }}
      >
        {chars.map((char, index) => (
          <Box
            key={`${index}-${char}`}
            component="span"
            sx={{
              display: 'inline-block',
              minWidth: char === ' ' ? '0.3em' : undefined,
              animation: `preloader-letter-up ${LETTER_DURATION_S}s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
              animationDelay: `${index * CHAR_STAGGER_MS}ms`,
              opacity: 0,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Preloader
