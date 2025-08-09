import React from "react";
import { Box, Stack, IconButton, Typography, Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import appTheme from "../../styles/theme";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const CONTACT_EMAIL = "tzuki.yahav@gmail.com";

export default function Footer() {
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? appTheme.dark : appTheme.light;
  const { t, i18n } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        px: 2,
        py: 3,
        bgcolor: theme.colors.innerCardBackground,
        color: theme.colors.textMuted,
        borderTop: `1.5px solid ${theme.colors.inputBorder}`,
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{ maxWidth: 1200, mx: "auto" }}
      >
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          © {year} {t("footer.copyright")} Yahav Tzukerman
        </Typography>
        <Stack direction="row" spacing={1}>
          <Tooltip title="GitHub">
            <IconButton
              href="https://github.com/Yahav-Tzukerman"
              target="_blank"
              rel="noopener"
              sx={{ color: theme.colors.textMuted, fontSize: 22 }}
              aria-label="GitHub"
            >
              <FaGithub />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn">
            <IconButton
              href="https://linkedin.com/in/yahav-tzukerman"
              target="_blank"
              rel="noopener"
              sx={{ color: theme.colors.textMuted, fontSize: 22 }}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </IconButton>
          </Tooltip>
          <Tooltip title={CONTACT_EMAIL}>
            <IconButton
              href={`mailto:${CONTACT_EMAIL}`}
              sx={{ color: theme.colors.textMuted, fontSize: 22 }}
              aria-label="Email"
            >
              <FaEnvelope />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </Box>
  );
}
