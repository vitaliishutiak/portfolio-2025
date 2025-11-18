"use client";

import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { useTranslations } from "next-intl";
import { Link } from "../navigation";
import { useRef, useEffect } from "react";
import {
  animateProjectsBlock,
  animateTitle,
  isMobileDevice,
} from "../lib/animations";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ProjectsBlock: React.FC = () => {
  const t = useTranslations("projects");
  // Беремо тільки перші 4 проекти
  const featuredProjects = projects.slice(0, 4);
  const projectsBlockRef = useRef(null);
  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Розділяємо на 2 блоки по 2 картки
  const firstRowProjects = featuredProjects.slice(0, 2);
  const secondRowProjects = featuredProjects.slice(2, 4);

  useEffect(() => {
    const cleanups: (() => void)[] = [];

    if (
      firstRowRef.current &&
      secondRowRef.current &&
      projectsBlockRef.current
    ) {
      const firstRowCards = Array.from(firstRowRef.current.children);
      const secondRowCards = Array.from(secondRowRef.current.children);

      const cleanup = animateProjectsBlock(
        firstRowCards,
        secondRowCards,
        projectsBlockRef.current
      );
      if (cleanup) cleanups.push(cleanup);
    }
    if (titleRef.current) {
      const cleanup = animateTitle(titleRef.current);
      if (cleanup) cleanups.push(cleanup);
    }

    // Cleanup при розмонтуванні компонента
    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <Box
      ref={projectsBlockRef}
      component="section"
      sx={{ py: { xs: 6, md: 15 } }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "1040px" },
          maxWidth: "1040px",
          mx: "auto",
          px: { xs: 2 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "20px",
        }}
      >
        {/* Перший блок: Тайтл + 2 картки */}
        <Box>
          <Typography
            ref={titleRef}
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 500,
              color: "#121212",
              mb: "20px",
              fontSize: { xs: "32px", md: "40px" },
              fontFamily: "var(--font-outfit)",
            }}
          >
            {t("title")}
          </Typography>
          <Box
            ref={firstRowRef}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(1, 510px)" },
              gap: "20px",
              justifyContent: { xs: "stretch", md: "center" },
              perspective: "1000px",
            }}
          >
            {firstRowProjects.map((project) => (
              <ProjectCard
                key={project.id}
                img={project.img}
                title={project.title}
                technologies={project.technologies}
              />
            ))}
          </Box>
        </Box>

        {/* Другий блок: 2 картки + кнопка */}
        <Box>
          <Box
            ref={secondRowRef}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(1, 510px)" },
              gap: "20px",
              justifyContent: { xs: "stretch", md: "center" },
              mb: 4,
              perspective: "1000px",
            }}
          >
            {secondRowProjects.map((project) => (
              <ProjectCard
                key={project.id}
                img={project.img}
                title={project.title}
                technologies={project.technologies}
              />
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <Button
              component={Link}
              href="/projects"
              variant="text"
              fullWidth={isMobile}
              sx={{
                color: "#121212",
                backgroundColor: isMobile ? "#FFCC00" : "transparent",
                fontWeight: 500,
                fontSize: { xs: "15px", md: "24px" },
                textTransform: "none",
                fontFamily: "var(--font-outfit)",
                borderRadius: isMobile ? "32px" : "0px",
                "&:hover": {
                  transform: { xs: "none", md: "scale(1.05)" },
                  transition: " 0.3s ",
                },
              }}
            >
              {t("seeAll")}
              <ArrowRightAltIcon sx={{ fontSize: "24px" }} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectsBlock;
