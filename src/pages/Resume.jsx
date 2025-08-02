import React from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Chip,
  Button,
  Divider,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import appTheme from "../styles/theme";
import resumeData from "../data/resumeData";
import { FaLinkedin, FaGithub, FaDownload, FaEnvelope } from "react-icons/fa";

const techIcons = {
  React: (
    <span style={{ color: "#61dafb", fontWeight: "bold", fontSize: 18 }}>
      ⚛️
    </span>
  ),
  "Node.js": (
    <span style={{ color: "#3c873a", fontWeight: "bold", fontSize: 18 }}>
      🟩
    </span>
  ),
  MongoDB: (
    <span style={{ color: "#47a248", fontWeight: "bold", fontSize: 18 }}>
      🍃
    </span>
  ),
  Java: (
    <span style={{ color: "#f89820", fontWeight: "bold", fontSize: 18 }}>
      ☕
    </span>
  ),
  ".NET": (
    <span style={{ color: "#5c2d91", fontWeight: "bold", fontSize: 18 }}>
      🟪
    </span>
  ),
  SQL: (
    <span style={{ color: "#336791", fontWeight: "bold", fontSize: 18 }}>
      🗄️
    </span>
  ),
  Angular: (
    <span style={{ color: "#dd0031", fontWeight: "bold", fontSize: 18 }}>
      🅰️
    </span>
  ),
  JavaScript: (
    <span style={{ color: "#f7df1e", fontWeight: "bold", fontSize: 18 }}>
      🟨
    </span>
  ),
  TypeScript: (
    <span style={{ color: "#3178c6", fontWeight: "bold", fontSize: 18 }}>
      🟦
    </span>
  ),
  Python: (
    <span style={{ color: "#306998", fontWeight: "bold", fontSize: 18 }}>
      🐍
    </span>
  ),
  Docker: (
    <span style={{ color: "#2496ed", fontWeight: "bold", fontSize: 18 }}>
      🐳
    </span>
  ),
  CSharp: (
    <span style={{ color: "#239120", fontWeight: "bold", fontSize: 18 }}>
      🟩
    </span>
  ),
  C: (
    <span style={{ color: "#00599c", fontWeight: "bold", fontSize: 18 }}>
      🟦
    </span>
  ),
  HTML: (
    <span style={{ color: "#e34c26", fontWeight: "bold", fontSize: 18 }}>
      🟧
    </span>
  ),
  CSS: (
    <span style={{ color: "#1572b6", fontWeight: "bold", fontSize: 18 }}>
      🟦
    </span>
  ),
  PowerShell: (
    <span style={{ color: "#012456", fontWeight: "bold", fontSize: 18 }}>
      🟦
    </span>
  ),
  Spring: (
    <span style={{ color: "#6db33f", fontWeight: "bold", fontSize: 18 }}>
      🌱
    </span>
  ),
  Git: (
    <span style={{ color: "#f05032", fontWeight: "bold", fontSize: 18 }}>
      🐙
    </span>
  ),
  Linux: (
    <span style={{ color: "#fcc624", fontWeight: "bold", fontSize: 18 }}>
      🐧
    </span>
  ),
};

export default function Resume() {
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? appTheme.dark : appTheme.light;
  const { t } = useTranslation();

  return (
    <Box sx={{ maxWidth: 950, mx: "auto", py: 4, px: 1 }}>
      {/* כותרת דף מרכזית */}
      <Typography
        variant="h2"
        align="center"
        fontWeight={900}
        color={theme.colors.primary}
        sx={{ mb: 2, letterSpacing: 1 }}
      >
        {t("resume.title")}
      </Typography>

      {/* Header - שם, תפקיד, כפתורים */}
      <Paper
        sx={{
          p: { xs: 2, md: 5 },
          mb: 4,
          borderRadius: 5,
          bgcolor: theme.colors.cardBackground,
          textAlign: "center",
          boxShadow: theme.colors.shadow,
        }}
      >
        <Typography variant="h4" fontWeight={800} color={theme.colors.primary}>
          {t("home.title")}
        </Typography>
        <Typography variant="h6" color={theme.colors.secondaryText} mb={1}>
          {t("home.role")}
        </Typography>
        <Typography variant="body1" color={theme.colors.textMuted} mb={3}>
          {t(resumeData.summaryKey)}
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" mb={1}>
          <Button
            href="/Yahav Tzukerman - Resume.pdf"
            download
            variant="contained"
            startIcon={<FaDownload />}
            sx={{ fontWeight: 700 }}
          >
            {t("resume.download")}
          </Button>
          <Button
            href="https://github.com/Yahav-Tzukerman"
            target="_blank"
            variant="outlined"
            startIcon={<FaGithub />}
          >
            GitHub
          </Button>
          <Button
            href="https://linkedin.com/in/yahav-tzukerman"
            target="_blank"
            variant="outlined"
            startIcon={<FaLinkedin />}
          >
            LinkedIn
          </Button>
          <Button
            href="mailto:tzuki.yahav@gmail.com"
            variant="text"
            startIcon={<FaEnvelope />}
          >
            Email
          </Button>
        </Stack>
      </Paper>

      {/* Experience Section */}
      <Paper
        sx={{
          p: { xs: 2, md: 4 },
          mb: 4,
          borderRadius: 5,
          bgcolor: theme.colors.cardBackground,
          boxShadow: theme.colors.shadow,
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          mb={2}
          color={theme.colors.textLight}
        >
          {t("resume.experienceTitle")}
        </Typography>
        {resumeData.experience.map((exp, idx) => (
          <Box key={idx} mb={2.5}>
            <Typography
              variant="h6"
              fontWeight={700}
              color={theme.colors.primary}
            >
              {exp.company} – {t(exp.roleKey)}
            </Typography>
            <Typography
              variant="subtitle2"
              color={theme.colors.secondaryText}
              sx={{ mb: 1 }}
            >
              {exp.period}
            </Typography>
            <ul
              style={{
                margin: 0,
                paddingInlineStart: "1.5em",
                color: theme.colors.textLight,
              }}
            >
              {exp.descriptionKeys.map((descKey) => (
                <li key={descKey}>
                  <Typography variant="body2" color={theme.colors.textMuted}>
                    {t(descKey)}
                  </Typography>
                </li>
              ))}
            </ul>
            {idx !== resumeData.experience.length - 1 && (
              <Divider sx={{ my: 2 }} />
            )}
          </Box>
        ))}
      </Paper>

      {/* Skills Section */}
      <Paper
        sx={{
          p: { xs: 2, md: 4 },
          mb: 4,
          borderRadius: 5,
          bgcolor: theme.colors.cardBackground,
          boxShadow: theme.colors.shadow,
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          mb={2}
          color={theme.colors.textLight}
        >
          {t("resume.skillsTitle")}
        </Typography>
        <Stack direction="row" flexWrap="wrap" mb={2}>
          {resumeData.skills.map((skill) => (
            <Box dir="ltr" key={skill}>
              <Chip
                icon={techIcons[skill] || null}
                label={skill}
                sx={{
                  m: 0.5,
                  fontWeight: 600,
                  fontSize: 15,
                  bgcolor: theme.colors.innerCardBackground,
                  color: theme.colors.textLight,
                  px: 1.2,
                  py: 0.2,
                  height: 34,
                  borderRadius: 2.2,
                }}
              />
            </Box>
          ))}
        </Stack>
        <Typography
          variant="body2"
          color={theme.colors.textMuted}
          sx={{ mt: 2 }}
        >
          {t("resume.skillsSoftTitle")}
        </Typography>
        <Stack direction="row" flexWrap="wrap">
          {resumeData.skillsSoft.map((softKey) => (
            <Chip
              key={softKey}
              label={t(softKey)}
              sx={{
                m: 0.5,
                fontSize: 14,
                bgcolor: theme.colors.innerCardBackground,
                color: theme.colors.textMuted,
              }}
            />
          ))}
        </Stack>
      </Paper>

      {/* Education Section */}
      <Paper
        sx={{
          p: { xs: 2, md: 4 },
          mb: 4,
          borderRadius: 5,
          bgcolor: theme.colors.cardBackground,
          boxShadow: theme.colors.shadow,
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          mb={2}
          color={theme.colors.textLight}
        >
          {t("resume.educationTitle")}
        </Typography>
        {resumeData.education.map((edu, idx) => (
          <Box key={idx} mb={2}>
            <Typography
              variant="h6"
              fontWeight={700}
              color={theme.colors.primary}
            >
              {t(edu.degreeKey)}
            </Typography>
            <Typography variant="subtitle2" color={theme.colors.secondaryText}>
              {edu.institution} | {edu.period}
            </Typography>
          </Box>
        ))}
      </Paper>

      {/* Languages */}
      <Paper
        sx={{
          p: { xs: 2, md: 4 },
          borderRadius: 5,
          bgcolor: theme.colors.cardBackground,
          boxShadow: theme.colors.shadow,
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          mb={2}
          color={theme.colors.textLight}
        >
          {t("resume.languagesTitle")}
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap">
          {resumeData.languages.map((lang, idx) => (
            <Chip
              key={idx}
              label={`${t(lang.labelKey)} – ${t(lang.levelKey)}`}
              sx={{
                m: 0.5,
                fontSize: 14,
                bgcolor: theme.colors.innerCardBackground,
                color: theme.colors.textMuted,
              }}
            />
          ))}
        </Stack>
      </Paper>
    </Box>
  );
}
