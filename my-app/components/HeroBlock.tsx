"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import { HEADER_TOOLBAR_HEIGHT_PX } from "../lib/contentWidth";

const HeroBlock: React.FC = () => {
  const services = ["Web Development", "UI/UX Design", "SEO Optimization", "Website Support"];

  const COLORS = {
    white: "#ffffff",
    black: "#0a0a0a",
  } as const;

  const PlusIcon = () => (
    <Box
      sx={{
        width: 14,
        height: 14,
        position: "relative",
        opacity: 1,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: 2,
          transform: "translateX(-50%)",
          bgcolor: COLORS.white,
          borderRadius: 99,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          height: 2,
          transform: "translateY(-50%)",
          bgcolor: COLORS.white,
          borderRadius: 99,
        }}
      />
    </Box>
  );

  return (
    <Box
      sx={{
        width: "100%",
        pt: 0,
        pl: "4px",
        pr: "4px",
        pb: "4px",
        mt: 0,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: "680px", md: `calc(100dvh - ${HEADER_TOOLBAR_HEIGHT_PX}px - 4px)` },
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          bgcolor: "#000000",
          borderRadius: { xs: "20px", md: "25px" },
        }}
      >
        <Box
          component="video"
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            pointerEvents: "none",
            filter: "grayscale(1)",
            opacity: 0.7,
          }}
        />

        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            opacity: 0.05,
            mixBlendMode: "overlay",
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 0)",
            backgroundSize: "6px 6px",
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            flex: "1 1 auto",
            minHeight: "100%",
            px: { xs: "20px", md: "36px" },
            pt: { xs: "54px", md: "90px" },
            pb: { xs: "36px", md: "90px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.45fr 0.55fr" },
              gap: 2,
              alignItems: "start",
            }}
          >
            <Box sx={{ minWidth: 0 }}>
              {/* Keep Studio aligned to the exact right edge of the big title */}
              <Box sx={{ display: "inline-block", maxWidth: "100%" }}>
                <Typography
                  sx={{
                    fontFamily: "var(--framer-font-family)",
                    fontWeight: 600,
                    letterSpacing: "-0.06em",
                    lineHeight: { xs: "88%", md: "83%" },
                    fontSize: {
                      xs: "clamp(56px, 11vw, 140px)",
                      md: "clamp(130px, 10vw, 200px)",
                    },
                    color: COLORS.white,
                    whiteSpace: "nowrap",
                  }}
                >
                  Vitalii Shutiak
                </Typography>

                <Typography
                  sx={{
                    mt: { xs: 0.75, md: -1 },
                    fontFamily: "var(--framer-font-family)",
                    fontWeight: 600,
                    letterSpacing: "-0.06em",
                    lineHeight: "120%",
                    fontSize: { xs: "clamp(28px, 4vw, 52px)", md: "clamp(42px, 3vw, 60px)" },
                    color: COLORS.white,
                    textAlign: "right",
                  }}
                >
                  Studio
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0.75,
                alignItems: "flex-start",
                textAlign: "left",
                pt: 2,
              }}
            >
              {services.map((s) => (
                <Typography
                  key={s}
                  sx={{
                    fontFamily: "var(--framer-font-family)",
                    fontWeight: 600,
                    letterSpacing: "-0.04em",
                    lineHeight: "110%",
                    fontSize: { xs: "15px", md: "18px" },
                    color: "rgba(255,255,255,0.95)",
                  }}
                >
                  {s}
                </Typography>
              ))}
            </Box>
          </Box>

          <Box
            aria-hidden
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
              px: 0,
              pointerEvents: "none",
            }}
          >
            {Array.from({ length: 4 }).map((_, idx) => (
              <PlusIcon key={idx} />
            ))}
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "grid" },
              flexDirection: { xs: "column", md: "unset" },
              gridTemplateColumns: { md: "1.1fr 0.8fr 1.1fr" },
              gap: { xs: 2.5, md: 2 },
              alignItems: { xs: "stretch", md: "end" },
            }}
          >
            {/* Right card (goes first on mobile) */}
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", md: "flex-end" },
                order: { xs: 1, md: 3 },
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "120px 1fr", sm: "170px 1fr" },
                  gap: "4px",
                  alignItems: "stretch",
                  width: { xs: "100%", md: 440 },
                  maxWidth: "100%",
                  borderRadius: "16px",
                  backgroundColor: "transparent",
                  transition: "background-color 0.25s ease",
                  "&:hover": { backgroundColor: "#fff", boxShadow: "none", outline: "none" },
                  "&:hover .hero-cta-left": {
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  },
                  "&:hover .hero-cta-right": {
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  },
                }}
              >
                <Box
                  className="hero-cta-left"
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "16px",
                    p: "4px",
                    transition: "border-radius 0.25s ease",
                  }}
                >
                  <Box
                    component="img"
                    alt="Team member"
                    loading="lazy"
                    src="/hero-image-smile@2x.jpg"
                    sx={{
                      width: "100%",
                      borderRadius: "12px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>

                <Box
                  className="hero-cta-right"
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "16px",
                    p: { xs: "8px 10px", sm: "20px" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 1,
                    transition: "border-radius 0.25s ease",
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 0.25 }}>
                    <Typography
                      sx={{
                        fontFamily: "var(--framer-font-family)",
                        fontWeight: 600,
                        letterSpacing: "-0.04em",
                        lineHeight: "100%",
                        fontSize: "14px",
                        color: COLORS.black,
                      }}
                    >
                      Owner
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: "var(--framer-font-family)",
                      fontWeight: 600,
                      letterSpacing: "-0.04em",
                      lineHeight: "115%",
                      fontSize: { xs: "16px", sm: "20px" },
                      color: "#090909",
                    }}
                  >
                    Vitalii Shutiak
                  </Typography>

                  <Box
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "fit-content",
                      px: 3,
                      py: 1,
                      borderRadius: "50px",
                      bgcolor: COLORS.black,
                      color: COLORS.white,
                      fontFamily: "var(--framer-font-family)",
                      fontWeight: 600,
                      letterSpacing: "-0.04em",
                      lineHeight: "100%",
                      fontSize: "14px",
                      gap: 1,
                      cursor: "pointer",
                    }}
                  >
                    Let’s talk
                    <Box
                      aria-hidden
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        bgcolor: COLORS.white,
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Left text (below card on mobile, left on desktop) */}
            <Box sx={{ maxWidth: { xs: "100%", md: 380 }, order: { xs: 2, md: 1 }, textAlign: { xs: "center", md: "left" } }}>
              <Typography
                sx={{
                  fontFamily: "var(--framer-font-family)",
                  fontWeight: 600,
                  letterSpacing: "-0.06em",
                  lineHeight: "120%",
                  fontSize: { xs: "16px", md: "18px" },
                  color: COLORS.white,
                }}
              >
                No generic websites. No unnecessary features.
                Just fast, functional websites built to convert and grow your business.
              </Typography>
            </Box>

            {/* Copyright (shows under text on mobile, center on desktop) */}
            <Box sx={{ order: { xs: 3, md: 2 }, textAlign: { xs: "left", md: "center" } }}>
              <Typography
                sx={{
                  fontFamily: "var(--framer-font-family)",
                  fontWeight: 600,
                  letterSpacing: "-0.04em",
                  lineHeight: "110%",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                © 2025 Vitalii Shutiak Studio
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroBlock;
