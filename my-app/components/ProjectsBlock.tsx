"use client";

import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { useTranslations } from "next-intl";
import { Link } from "../navigation";
import { useRef, useEffect } from "react";
import { animateTitle } from "../lib/animations";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { CONTENT_MAX_WIDTH_PX } from "../lib/contentWidth";

const GRID_GAP_PX = 4;

const ProjectsBlock: React.FC = () => {
  const t = useTranslations("projects");
  const featuredProjects = projects.slice(0, 4);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const firstRowProjects = featuredProjects.slice(0, 2);
  const secondRowProjects = featuredProjects.slice(2, 4);

  useEffect(() => {
    if (!titleRef.current) return;
    const cleanup = animateTitle(titleRef.current);
    return () => cleanup?.();
  }, []);

  const gridSx = {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
    gap: `${GRID_GAP_PX}px`,
    width: "100%",
  } as const;

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 15 } }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: CONTENT_MAX_WIDTH_PX,
          mx: "auto",
          px: { xs: 2, md: 3 },
        }}
      >
       
        {/* Header (like reference) */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr 1fr" },
            alignItems: "start",
            columnGap: { xs: 0, md: 6 },
            rowGap: { xs: 2, md: 0 },
            mb: { xs: 3, md: 14 },
          }}
        >
           <Typography
              sx={{
                fontFamily: "var(--framer-font-family)",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "130%",
                letterSpacing: "-0.04em",
                color: "text.secondary",
                mb: { xs: 1, md: 2 },
              }}
            >
              ({projects.length})
            </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            

            <Typography
              ref={titleRef}
              component="h2"
              sx={{
                fontFamily: "var(--framer-font-family)",
                fontWeight: 700,
                fontSize: { xs: "56px", md: "144px" },
                lineHeight: "0.95",
                letterSpacing: "-0.06em",
                color: "text.primary",
                mb: { xs: 1, md: 2 },
              }}
            >
              Projects.
            </Typography>

            <Typography
              sx={{
                fontFamily: "var(--framer-font-family)",
                fontWeight: 600,
                fontSize: { xs: "24px", md: "36px" },
                lineHeight: "100%",
                letterSpacing: "-0.06em",
                color: "text.primary",
              }}
            >
              ©2026
            </Typography>
          </Box>
          <Box></Box>
          <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
          <Typography
            sx={{
              fontFamily: "var(--framer-font-family)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "150%",
              color: "text.secondary",
              maxWidth: 280,
              justifySelf: { xs: "start", md: "end" },
            }}
          >
            {t("allProjectsDescription")}
          </Typography>
          </Box>

          
        </Box>

        <Box sx={gridSx}>
          {firstRowProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              img={project.img}
              title={project.title}
              technologies={project.technologies}
              year={project.year}
              href={`/projects/${project.id}`}
            />
          ))}
        </Box>

        <Box
          sx={{
            ...gridSx,
            mt: `${GRID_GAP_PX}px`,
          }}
        >
          {secondRowProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              img={project.img}
              title={project.title}
              technologies={project.technologies}
              year={project.year}
              href={`/projects/${project.id}`}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            mt: { xs: 3, md: 4 },
          }}
        >
          <Button
            component={Link}
            href="/projects"
            variant="text"
            fullWidth={isMobile}
            sx={{
              color: "text.primary",
              backgroundColor: isMobile ? "#FFCC00" : "transparent",
              fontWeight: 500,
              fontSize: { xs: "15px", md: "24px" },
              textTransform: "none",
              fontFamily: "var(--framer-font-family)",
              borderRadius: isMobile ? "32px" : "0px",
              "&:hover": {
                transform: { xs: "none", md: "scale(1.05)" },
                transition: "0.3s",
              },
            }}
          >
            {t("seeAll")}
            <ArrowRightAltIcon sx={{ fontSize: "24px" }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectsBlock;
