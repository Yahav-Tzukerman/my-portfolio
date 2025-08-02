import React, { use } from "react";
import {
  Paper,
  Typography,
  Chip,
  Stack,
  Box,
  Tooltip,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiRedux,
  SiDotnet,
} from "react-icons/si";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import appTheme from "../styles/theme";
import { useTranslation } from "react-i18next";
import AppButton from "./common/AppButton";

const techIcons = {
  React: <SiReact size={22} color={appTheme.dark.colors.react} />,
  "Node.js": <SiNodedotjs size={22} color={appTheme.dark.colors.node} />,
  MongoDB: <SiMongodb size={22} color={appTheme.dark.colors.mongo} />,
  JWT: <SiJavascript size={22} color={appTheme.dark.colors.js} />,
  Redux: <SiRedux size={22} color={appTheme.dark.colors.redux} />,
  ".NET": <SiDotnet size={22} color={appTheme.dark.colors.dotnet} />,
};

export default function ProjectCard({ project, theme, index }) {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 + index * 0.13, type: "spring" }}
      whileHover={{
        scale: 1.025,
        boxShadow: "0 8px 32px 0 rgba(100,120,255,0.10)",
        transition: { duration: 0.18 },
      }}
      style={{ width: "100%" }}
    >
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          borderRadius: 6,
          overflow: "hidden",
          bgcolor: theme.colors.cardBackground,
          boxShadow: theme.colors.shadow,
          mb: 4,
          borderLeft: `5px solid ${theme.colors.innerCardBackground}`,
          transition: "border 0.2s, box-shadow 0.2s, filter 0.2s",
          "&:hover": {
            filter: "brightness(1.03)",
            borderLeft: `8px solid ${theme.colors.innerCardBackground}`,
            boxShadow: "0 8px 36px 0 rgba(50,100,255,0.13)",
          },
        }}
      >
        <Box
          sx={{
            minWidth: 220,
            bgcolor: theme.colors.cardBackground,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <Box
            sx={{
              minWidth: 220,
              bgcolor: theme.colors.cardBackground,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: 2,
            }}
          >
            <CardMedia
              component="img"
              image={project.image}
              alt={t(project.nameKey)}
              sx={{
                width: { xs: "100%", sm: 450 },
                height: { xs: 180, sm: "100%" },
                borderRadius: 3,
                boxShadow: 2,
                objectFit: "cover",
                bgcolor: theme.colors.innerCardBackground,
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            p: { xs: 2, sm: 4 },
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: theme.colors.primary, fontWeight: 800 }}
          >
            {t(project.nameKey)}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: theme.colors.textLight, mt: 1 }}
          >
            {t(project.descriptionKey)}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              mt: 2,
              flexWrap: "wrap",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            {project.tags.map((tag) => (
              <Box dir="ltr" key={tag}>
                <Tooltip title={tag} key={tag}>
                  <Chip
                    icon={techIcons[tag] || null}
                    label={tag}
                    sx={{
                      bgcolor: theme.colors.innerCardBackground,
                      color: theme.colors.textLight,
                      fontWeight: 500,
                      mr: 1,
                      "&:hover": {
                        bgcolor: theme.colors.hover,
                      },
                    }}
                  />
                </Tooltip>
              </Box>
            ))}
          </Stack>
          <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
            {project.demo && (
              <AppButton
                label={
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <FaExternalLinkAlt style={{ marginRight: 8 }} />{" "}
                    {t("projects.demo")}
                  </Box>
                }
                onClick={() => window.open(project.demo, "_blank")}
                variant="update"
                size={"sm"}
              />
            )}
            <AppButton
              label={
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FaGithub style={{ marginRight: 8 }} /> {t("projects.github")}
                </Box>
              }
              onClick={() => window.open(project.github, "_blank")}
              variant="secondary"
              size={"sm"}
            />
          </Stack>
          <Stack direction="column" spacing={0.5} sx={{ mt: 2 }}>
            {project.featuresKeys &&
              project.featuresKeys.map((feature, idx) => (
                <Typography
                  key={idx}
                  variant="body2"
                  sx={{ color: theme.colors.textMuted }}
                >
                  • {t(feature)}
                </Typography>
              ))}
          </Stack>
        </Box>
      </Paper>
    </motion.div>
  );
}
