'use client';

import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { animateCard } from "../lib/animations";

interface SkillCardProps {
  img: string;
  name: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ img, name, description }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      animateCard(cardRef.current);
    }
  }, []);

  return (
    <Box
      ref={cardRef}
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", md: "510px" },
        display: "flex",
        gap: { xs: "16px", md: "24px" },
        borderRadius: { xs: "16px", md: "24px" },
        backgroundColor: "#1212120A",
        p: { xs: "16px", md: "20px" },
      }}
    >
      <Box
        component={"img"}
        src={img}
        alt={`${name} icon`}
        loading="lazy"
        sx={{
          width: { xs: "48px", md: "56px" },
          height: { xs: "48px", md: "56px" },
          minWidth: { xs: "48px", md: "56px" },
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "8px", md: "10px" },
        }}
      >
        <Typography
          sx={{
            color: "#121212",
            fontSize: { xs: "18px", md: "24px" },
            fontWeight: 500,
            fontFamily: "var(--font-outfit)",
            lineHeight: "100%",
            letterSpacing: "0%",
            textTransform: "none",
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            color: "#12121299",
            fontSize: { xs: "13px", md: "15px" },
            fontWeight: 400,
            fontFamily: "var(--font-outfit)",
            lineHeight: "150%",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default SkillCard;
