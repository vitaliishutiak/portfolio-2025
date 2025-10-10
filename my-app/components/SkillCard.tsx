'use client';

import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


interface SkillCardProps {
  img: string;
  name: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ img, name, description }) => {

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
    <Box
      ref={cardRef}
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", md: "510px" },
        display: "flex",
        gap: "24px",
        borderRadius: "24px",
        backgroundColor: "#1212120A",
        p: "20px",
      }}
    >
      <Box
        component={"img"}
        src={img}
        alt={name}
        sx={{
          width: "56px",
          height: "56px",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography
          sx={{
            color: "#121212",
            fontSize: "24px",
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
            fontSize: "15px",
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
