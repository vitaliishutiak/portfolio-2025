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
        <Typography
          ref={titleRef}
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 500,
            color: "text.primary",
            mb: { xs: 2, md: 2.5 },
            fontSize: { xs: "32px", md: "40px" },
            fontFamily: "var(--framer-font-family)",
          }}
        >
          {t("title")}
        </Typography>

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
