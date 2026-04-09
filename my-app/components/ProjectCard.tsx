'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from '../navigation';

export interface ProjectCardProps {
  id?: number;
  img: string;
  title: string;
  technologies: string[];
  year?: number | string;
  href?: string;
}

const DOT_SIZE_PX = 6;

const TrafficDots = () => {
  const idle = 'rgba(0,0,0,0.2)';

  return (
  <Box
    role="presentation"
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
    }}
    sx={{
      display: 'flex',
      gap: 0.5,
      alignItems: 'center',
      flexShrink: 0,
    }}
  >
    {(
      [
        { className: 'traffic-dot-red', active: '#e53935' },
        { className: 'traffic-dot-yellow', active: '#FFCC00' },
        { className: 'traffic-dot-green', active: '#43a047' },
      ] as const
    ).map(({ className, active }) => (
      <Box
        key={className}
        className={className}
        sx={{
          width: DOT_SIZE_PX,
          height: DOT_SIZE_PX,
          borderRadius: '50%',
          bgcolor: idle,
          flexShrink: 0,
          transition: 'background-color 0.25s ease, box-shadow 0.25s ease',
          '.project-card-root:hover &': {
            bgcolor: active,
            boxShadow: `0 0 8px ${active}88`,
          },
        }}
      />
    ))}
  </Box>
  );
};

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  (props, ref) => {
    const { img, title, year = 2025, href } = props;
    const yearStr = String(year);
    const initial = title.trim().charAt(0).toUpperCase() || '•';

    const header = (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 1,
          px: 2,
          py: 1.25,
          bgcolor: '#ffffff',
          borderRadius: '14px',
        }}
      >
        <Box
          sx={{
            fontFamily: 'var(--framer-font-family)',
            fontSize: { xs: '14px', sm: '15px' },
            lineHeight: 1.3,
            minWidth: 0,
          }}
        >
          <Typography component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>
            {title}.
          </Typography>
          <Typography
            component="span"
            sx={{ fontWeight: 400, color: 'text.secondary', ml: 0.25 }}
          >
            {' '}
            /{yearStr}
          </Typography>
        </Box>
        <TrafficDots />
      </Box>
    );

    const media = (
      <Box
        className="project-card-media"
        sx={{
          position: 'relative',
          width: '100%',
          aspectRatio: { xs: '4/3', sm: '16/10' },
          bgcolor: 'action.hover',
          borderRadius: '16px',
          border: '3px solid #ffffff',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        <Box
          component="img"
          className="project-card-img"
          src={img}
          alt={`${title} — preview`}
          loading="lazy"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.45s ease, filter 0.45s ease',
            '.project-card-media:hover &': {
              transform: 'scale(1.08)',
              filter: 'blur(8px)',
            },
          }}
        />
        <Box
          className="project-card-overlay"
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1.5,
            px: 2,
            pointerEvents: 'none',
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 100%)',
            transition: 'background 0.45s ease',
            '.project-card-media:hover &': {
              background:
                'linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.48) 100%)',
            },
          }}
        >
          <Box
            className="project-card-overlay-letter"
            sx={{
              width: 40,
              height: 40,
              borderRadius: 1,
              bgcolor: 'rgba(255,255,255,0.95)',
              color: '#121212',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--framer-font-family)',
              fontWeight: 700,
              fontSize: '1.1rem',
              flexShrink: 0,
              transition: 'transform 0.45s ease',
              '.project-card-media:hover &': {
                transform: 'scale(0.96)',
              },
            }}
            aria-hidden
          >
            {initial}
          </Box>
          <Typography
            className="project-card-overlay-title"
            sx={{
              fontFamily: 'var(--framer-font-family)',
              fontWeight: 700,
              fontSize: { xs: '1.1rem', sm: '1.35rem' },
              color: '#fff',
              textAlign: 'center',
              textShadow: '0 1px 12px rgba(0,0,0,0.45)',
              lineHeight: 1.2,
              transition: 'transform 0.45s ease',
              '.project-card-media:hover &': {
                transform: 'scale(0.94)',
              },
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    );

    const columnSx = {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      textDecoration: 'none',
      color: 'inherit',
    };

    if (href) {
      return (
        <Box
          ref={ref}
          className="project-card-root"
          component={Link}
          href={href}
          sx={columnSx}
        >
          {header}
          {media}
        </Box>
      );
    }

    return (
      <Box ref={ref} className="project-card-root" sx={columnSx}>
        {header}
        {media}
      </Box>
    );
  },
);

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
