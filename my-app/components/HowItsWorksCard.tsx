'use client';

import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { animateCard } from "../lib/animations";

interface HowItsWorksCardProps {
  number: number;
  title: string;
  description: string;
}

const HowItsWorksCard: React.FC<HowItsWorksCardProps> = ({
  number,
  title,
  description,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const cleanup = animateCard(cardRef.current);
      
      // Cleanup при розмонтуванні компонента
      return cleanup;
    }
  }, []);

  return (
    <Box
      ref={cardRef}
      sx={{
        width: "100%",
        maxWidth: { xs: '100%', md: "510px" },
        backgroundColor: "#FFFFFF0A",
        borderRadius: { xs: "16px", md: "24px" },
        padding: { xs: "16px", md: "24px" },
        gap: { xs: "16px", md: "24px" },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "32px", md: "40px" },
          height: { xs: "32px", md: "40px" },
          minWidth: { xs: "32px", md: "40px" },
          backgroundColor: "#FFFFFF0A",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: 500,
            lineHeight: "100%",
            fontFamily: "var(--font-outfit)",
          }}
        >
          {number}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '8px', md: '10px' } }}>
        <Typography
            sx={{
            color: "#fff",
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: 500,
            lineHeight: "100%",
            fontFamily: "var(--font-outfit)",
            }}
        >
            {title}
        </Typography>
        <Typography
            sx={{
            color: "#fff",
            opacity: "0.6",
            fontSize: { xs: "12px", md: "13px" },
            fontWeight: 500,
            lineHeight: "150%",
            fontFamily: "var(--font-outfit)",
            }}
        >
            {description}
        </Typography>
      </Box>
      
    </Box>
  );
};

export default HowItsWorksCard;
