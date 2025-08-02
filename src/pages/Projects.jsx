import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import appTheme from "../styles/theme";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { useTranslation } from "react-i18next";
import ProjectCardSkeleton from "../components/ProjectCardSkeleton";

export default function Projects() {
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? appTheme.dark : appTheme.light;
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ py: { xs: 2, md: 6 }, maxWidth: 1100, mx: "auto" }}>
      <Typography
        variant="h2"
        sx={{ fontWeight: 900, color: theme.colors.textLight, mb: 4 }}
      >
        {t("projects.title")}
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: theme.colors.secondaryText, mb: 4 }}
      >
        {t("projects.description")}
      </Typography>
      {loading
        ? Array.from({ length: 2 }).map((_, idx) => (
            <ProjectCardSkeleton key={idx} theme={theme} />
          ))
        : projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              theme={theme}
              index={idx}
            />
          ))}
    </Box>
  );
}
