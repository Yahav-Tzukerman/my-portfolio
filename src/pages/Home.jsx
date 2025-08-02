import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Avatar,
  Paper,
  Tooltip,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiDotnet,
  SiDocker,
  SiJavascript,
  SiRedux,
} from "react-icons/si";
import appTheme from "../styles/theme";
import AppButton from "../components/common/AppButton";
const AVATAR_URL = "/avatar.jpg";

export default function Home() {
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? appTheme.dark : appTheme.light;
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 2, md: 8 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 3 * 0.13, type: "spring" }}
        whileHover={{
          scale: 1.025,
          transition: { duration: 0.18 },
        }}
        style={{ width: "100%" }}
      >
        <Paper
          elevation={5}
          sx={{
            p: { xs: 2, md: 7 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 5,
            maxWidth: 950,
            mx: "auto",
            borderRadius: 6,
            bgcolor: theme.colors.cardBackground,
            boxShadow: "0 4px 36px 0 rgba(0,0,0,0.20)",
            backdropFilter: "blur(8px)",
            border: "1.5px solid rgba(255,255,255,0.06)",
            borderLeft: `5px solid ${theme.colors.innerCardBackground}`,
            transition: "border 0.2s, box-shadow 0.2s, filter 0.2s",
            "&:hover": {
              filter: "brightness(1.03)",
              borderLeft: `8px solid ${theme.colors.innerCardBackground}`,
              boxShadow: "0 8px 36px 0 rgba(50,100,255,0.13)",
            },
          }}
        >
          <Avatar
            src={AVATAR_URL}
            alt={t("home.avatarAlt", { defaultValue: "Avatar" })}
            sx={{
              width: { xs: 110, md: 155 },
              height: { xs: 110, md: 155 },
              boxShadow: 6,
              border: `4px solid ${theme.colors.avatarBorder}`,
              bgcolor: theme.colors.avatarBackground,
            }}
          />
          <Box sx={{ flex: 1, minWidth: 270 }}>
            <Typography
              variant="h2"
              fontWeight={900}
              sx={{
                background: theme.colors.headline,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              {t("home.title")}
            </Typography>
            <Typography
              variant="h5"
              fontWeight={700}
              color={theme.colors.secondaryText}
              gutterBottom
              sx={{ mt: 1 }}
            >
              {t("home.role")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 1.5,
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1.5 }}
              >
                <Tooltip title="React">
                  <SiReact size={28} color={theme.colors.react} />
                </Tooltip>
                <Tooltip title="Node.js">
                  <SiNodedotjs size={28} color={theme.colors.node} />
                </Tooltip>
                <Tooltip title=".NET">
                  <SiDotnet size={28} color={theme.colors.dotnet} />
                </Tooltip>
                <Tooltip title="MongoDB">
                  <SiMongodb size={28} color={theme.colors.mongo} />
                </Tooltip>
                <Tooltip title="Docker">
                  <SiDocker size={28} color={theme.colors.docker} />
                </Tooltip>
                <Tooltip title="JavaScript">
                  <SiJavascript size={26} color={theme.colors.js} />
                </Tooltip>
              </Box>
            </Box>
            <Typography
              variant="body1"
              sx={{ mb: 2, fontSize: 18, color: theme.colors.textLight }}
            >
              {t("home.intro")}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontStyle: "italic", color: theme.colors.textMuted, mb: 2 }}
            >
              {t("home.quote")}
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Box sx={{ gap: 1, display: "flex", flexDirection: "row" }}>
                <AppButton
                  label={t("home.cta.projects")}
                  variant="primary"
                  onClick={() => navigate("/projects")}
                  size={"sm"}
                />
                <AppButton
                  label={t("home.cta.cv")}
                  variant="secondary"
                  size={"sm"}
                  onClick={() => navigate("/resume")}
                />
                <AppButton
                  label={t("home.cta.contact")}
                  variant="muted"
                  size={"sm"}
                  onClick={() => navigate("/contact")}
                />
              </Box>
            </Stack>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
}
