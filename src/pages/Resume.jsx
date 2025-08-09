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
import AppButton from "../components/common/AppButton";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import appTheme from "../styles/theme";
import resumeData from "../data/resumeData";
import {
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaEnvelope,
  FaWindows,
  FaJava,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiDotnet,
  SiAngular,
  SiTypescript,
  SiPython,
  SiDocker,
  SiC,
  SiHtml5,
  SiCss3,
  SiSpring,
  SiGit,
  SiLinux,
  SiSqlite,
  SiGitlab,
  SiGithub,
  SiPostgresql,
  SiMysql,
  SiCoffeescript,
  SiOracle,
  SiPowers,
  SiNestjs,
  SiHibernate,
  SiSharp,
  SiGitforwindows,
} from "react-icons/si";
import { TbBrandPowershell } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";

const techIcons = {
  React: <SiReact size={22} color={appTheme.dark.colors.react} />,
  "Node.js": <SiNodedotjs size={22} color={appTheme.dark.colors.node} />,
  MongoDB: <SiMongodb size={22} color={appTheme.dark.colors.mongo} />,
  Java: <FaJava size={22} color={appTheme.dark.colors.java} />,
  ".NET Entity Framework": (
    <SiDotnet size={22} color={appTheme.dark.colors.dotnet} />
  ),
  SQL: <SiSqlite size={22} color={appTheme.dark.colors.sql} />,
  Angular: <SiAngular size={22} color={appTheme.dark.colors.angular} />,
  AngularJS: <SiAngular size={22} color={appTheme.dark.colors.angular} />,
  JavaScript: (
    <SiJavascript size={22} color={appTheme.dark.colors.javascript} />
  ),
  TypeScript: (
    <SiTypescript size={22} color={appTheme.dark.colors.typescript} />
  ),
  Python: <SiPython size={22} color={appTheme.dark.colors.python} />,
  Docker: <SiDocker size={22} color={appTheme.dark.colors.docker} />,
  NestJS: <SiNestjs size={22} color={appTheme.dark.colors.nestjs} />,
  // CSharp: <SiCsharp size={22} color={appTheme.dark.colors.csharp} />,
  C: <SiC size={22} color={appTheme.dark.colors.c} />,
  HTML: <SiHtml5 size={22} color={appTheme.dark.colors.html} />,
  CSS: <SiCss3 size={22} color={appTheme.dark.colors.css} />,
  PowerShell: (
    <TbBrandPowershell size={22} color={appTheme.dark.colors.powershell} />
  ),
  Spring: <SiSpring size={22} color={appTheme.dark.colors.spring} />,
  Git: <SiGit size={22} color={appTheme.dark.colors.git} />,
  Linux: <SiLinux size={22} color={appTheme.dark.colors.linux} />,
  GitLab: <SiGitlab size={22} color={appTheme.dark.colors.gitlab} />,
  GitHub: <SiGithub size={22} color={appTheme.dark.colors.github} />,
  PostgreSQL: (
    <SiPostgresql size={22} color={appTheme.dark.colors.postgresql} />
  ),
  MySQL: <SiMysql size={22} color={appTheme.dark.colors.mysql} />,
  Oracle: <SiOracle size={22} color={appTheme.dark.colors.oracle} />,
  PostgreSQL: (
    <SiPostgresql size={22} color={appTheme.dark.colors.postgresql} />
  ),
  Hibernate: <SiHibernate size={22} color={appTheme.dark.colors.hibernate} />,
  "C#": <SiSharp size={22} color={appTheme.dark.colors.csharp} />,
  "Windows Server": (
    <FaWindows size={22} color={appTheme.dark.colors.windows} />
  ),
  "Azure DevOps": <VscAzure size={22} color={appTheme.dark.colors.azure} />,
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
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 * 0.13, type: "spring" }}
        whileHover={{
          scale: 1.025,
          boxShadow: "0 8px 32px 0 rgba(100,120,255,0.10)",
          transition: { duration: 0.18 },
        }}
        style={{ width: "100%" }}
      >
        <Paper
          sx={{
            p: { xs: 2, md: 5 },
            mb: 4,
            borderRadius: 5,
            bgcolor: theme.colors.cardBackground,
            textAlign: "center",
            boxShadow: theme.colors.shadow,
            borderLeft: `5px solid ${theme.colors.innerCardBackground}`,
            transition: "border 0.2s, box-shadow 0.2s, filter 0.2s",
            "&:hover": {
              filter: "brightness(1.03)",
              borderLeft: `8px solid ${theme.colors.innerCardBackground}`,
              boxShadow: "0 8px 36px 0 rgba(50,100,255,0.13)",
            },
          }}
        >
          <Typography
            variant="h4"
            fontWeight={800}
            color={theme.colors.primary}
          >
            {t("home.title")}
          </Typography>
          <Typography variant="h6" color={theme.colors.secondaryText} mb={1}>
            {t("home.role")}
          </Typography>
          <Typography variant="body1" color={theme.colors.textMuted} mb={3}>
            {t(resumeData.summaryKey)}
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            gap={1}
            justifyContent="center"
            mb={1}
          >
            <AppButton
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <FaDownload style={{ marginRight: 8 }} />
                  {t("resume.download")}
                </Box>
              }
              onClick={() =>
                window.open("/Yahav Tzukerman - Resume.pdf", "_blank")
              }
              variant="primary"
              size={"sm"}
              download={true}
            />
            <AppButton
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <FaGithub style={{ marginRight: 8 }} /> GitHub
                </Box>
              }
              onClick={() =>
                window.open("https://github.com/Yahav-Tzukerman", "_blank")
              }
              variant="secondary"
              size={"sm"}
            />
            <AppButton
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <FaLinkedin />
                  LinkedIn
                </Box>
              }
              onClick={() =>
                window.open("https://linkedin.com/in/yahav-tzukerman", "_blank")
              }
              variant="secondary"
              size={"sm"}
            />
            <AppButton
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <FaEnvelope />
                  Email
                </Box>
              }
              onClick={() => window.open(`mailto:${resumeData.contactEmail}`)}
              variant="secondary"
              size={"sm"}
            />
          </Stack>
        </Paper>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 * 0.13, type: "spring" }}
        whileHover={{
          scale: 1.025,
          boxShadow: "0 8px 32px 0 rgba(100,120,255,0.10)",
          transition: { duration: 0.18 },
        }}
        style={{ width: "100%" }}
      >
        <Paper
          sx={{
            p: { xs: 2, md: 4 },
            mb: 4,
            borderRadius: 5,
            bgcolor: theme.colors.cardBackground,
            boxShadow: theme.colors.shadow,
            borderLeft: `5px solid ${theme.colors.innerCardBackground}`,
            transition: "border 0.2s, box-shadow 0.2s, filter 0.2s",
            "&:hover": {
              filter: "brightness(1.03)",
              borderLeft: `8px solid ${theme.colors.innerCardBackground}`,
              boxShadow: "0 8px 36px 0 rgba(50,100,255,0.13)",
            },
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
                {t(exp.companyKey)} – {t(exp.roleKey)}
              </Typography>
              <Typography
                variant="subtitle2"
                color={theme.colors.secondaryText}
                sx={{ mb: 1 }}
              >
                {t(exp.periodKey)}
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
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 * 0.13, type: "spring" }}
        whileHover={{
          scale: 1.025,
          boxShadow: "0 8px 32px 0 rgba(100,120,255,0.10)",
          transition: { duration: 0.18 },
        }}
        style={{ width: "100%" }}
      >
        <Paper
          sx={{
            p: { xs: 2, md: 4 },
            mb: 4,
            borderRadius: 5,
            bgcolor: theme.colors.cardBackground,
            boxShadow: theme.colors.shadow,
            borderLeft: `5px solid ${theme.colors.innerCardBackground}`,
            transition: "border 0.2s, box-shadow 0.2s, filter 0.2s",
            "&:hover": {
              filter: "brightness(1.03)",
              borderLeft: `8px solid ${theme.colors.innerCardBackground}`,
              boxShadow: "0 8px 36px 0 rgba(50,100,255,0.13)",
            },
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
            {Object.entries(resumeData.skills).map(([category, skills]) => (
              <Box key={category} mb={3}>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  color={theme.colors.textMuted}
                  mb={1}
                >
                  {t(`resume.skills.${category}`)}{" "}
                </Typography>
                <Stack direction="row" flexWrap="wrap">
                  {skills.map((skill) => (
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
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 * 0.13, type: "spring" }}
        whileHover={{
          scale: 1.025,
          boxShadow: "0 8px 32px 0 rgba(100,120,255,0.10)",
          transition: { duration: 0.18 },
        }}
        style={{ width: "100%" }}
      >
        <Paper
          sx={{
            p: { xs: 2, md: 4 },
            mb: 4,
            borderRadius: 5,
            bgcolor: theme.colors.cardBackground,
            boxShadow: theme.colors.shadow,
            borderLeft: `5px solid ${theme.colors.innerCardBackground}`,
            transition: "border 0.2s, box-shadow 0.2s, filter 0.2s",
            "&:hover": {
              filter: "brightness(1.03)",
              borderLeft: `8px solid ${theme.colors.innerCardBackground}`,
              boxShadow: "0 8px 36px 0 rgba(50,100,255,0.13)",
            },
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
              <Typography
                variant="subtitle2"
                color={theme.colors.secondaryText}
              >
                {t(edu.institutionKey)} | {t(edu.periodKey)}
              </Typography>
            </Box>
          ))}
        </Paper>
      </motion.div>

      {/* Languages */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 * 0.13, type: "spring" }}
        whileHover={{
          scale: 1.025,
          boxShadow: "0 8px 32px 0 rgba(100,120,255,0.10)",
          transition: { duration: 0.18 },
        }}
        style={{ width: "100%" }}
      >
        <Paper
          sx={{
            p: { xs: 2, md: 4 },
            borderRadius: 5,
            bgcolor: theme.colors.cardBackground,
            boxShadow: theme.colors.shadow,
            borderLeft: `5px solid ${theme.colors.innerCardBackground}`,
            transition: "border 0.2s, box-shadow 0.2s, filter 0.2s",
            "&:hover": {
              filter: "brightness(1.03)",
              borderLeft: `8px solid ${theme.colors.innerCardBackground}`,
              boxShadow: "0 8px 36px 0 rgba(50,100,255,0.13)",
            },
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
      </motion.div>
    </Box>
  );
}
