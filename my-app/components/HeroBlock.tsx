"use client";

import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { animateHeroBlock } from "../lib/animations";

const heroTitleStyles = {
  fontSize: { xs: "80px", sm: "130px", md: "200px" },
  textAlign: "center",
  fontWeight: 600,
  lineHeight: { xs: "100px", sm: "130px", md: "200px" },
  letterSpacing: "0%",
  textTransform: "uppercase",
  color: "#121212",
  opacity: " 0.1",
  fontFamily: "var(--font-outfit)",
};

const heroSubtitleStyles = {
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "150%",
  letterSpacing: "0px",
  maxWidth: "320px",
  position: "absolute",
  bottom: "40px",
  left: "40px",
  zIndex: 2,
  color: { xs: "#fff", md: "#121212" },
  fontFamily: "var(--font-outfit)",
};

const HeroBlock: React.FC = () => {
  const t = useTranslations("hero");

  const heroBlockRef = useRef(null);
  const titleTopRef = useRef(null);
  const titleBottomRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  // const imageSmileRef = useRef(null);

  useEffect(() => {
    if (
      titleTopRef.current &&
      titleBottomRef.current &&
      descriptionRef.current &&
      imageRef.current &&
      heroBlockRef.current
    ) {
      const cleanup = animateHeroBlock(
        titleTopRef.current,
        titleBottomRef.current,
        descriptionRef.current,
        imageRef.current,
        heroBlockRef.current
      );

      // Cleanup при розмонтуванні компонента
      return cleanup;
    }
  }, []);

  return (
    <Box
      ref={heroBlockRef}
      sx={{
        position: "relative",
        pt: "72px",
        width: "100%",
        height: "100vh",
        xs: 2,
        md: 5,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box marginTop="160px">
        <Typography variant="h1" sx={{ ...heroTitleStyles }} ref={titleTopRef}>
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
        alt="Vitalii Shutiak - Frontend Developer"
        loading="eager"
        fetchPriority="high"
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          width: "auto",
          height: "auto",
          maxWidth: "100%",
          maxHeight: "calc(100vh - 72px)",
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
        {t.rich("title", {
          highlight: (chunks) => (
            <span style={{ color: "#FFCC00" }}>{chunks}</span>
          ),
        })}
      </Typography>
      {/* Прогресівний блюр з кольором - оптимізовано для мобільних */}
      <Box
        component={"div"}
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "170px",
          zIndex: 1,
          background: {
            xs: "linear-gradient(to top, rgba(46, 46, 46, 0.95) 0%, rgba(48, 48, 48, 0.5) 40%, rgba(51, 51, 51, 0) 100%)",
            md: "transparent",
          },
          "&::before": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "100%",
            backdropFilter: { xs: "none", md: "blur(15px)" },
            backgroundColor: "#D9D9D903",
            mask: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0) 100%)",
            WebkitMask:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0) 100%)",
            display: { xs: "none", md: "block" },
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "100%",
            backdropFilter: { xs: "none", md: "blur(8px)" },
            backgroundColor: "#D9D9D903",
            mask: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
            WebkitMask:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
            display: { xs: "none", md: "block" },
          },
        }}
      />
    </Box>
  );
};

export default HeroBlock;
