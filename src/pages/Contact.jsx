import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  TextField,
  Button,
  IconButton,
  Tooltip,
  Divider,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import appTheme from "../styles/theme";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import AppInput from "../components/common/AppInput";
import AppTextArea from "../components/common/AppTextArea";
import AppButton from "../components/common/AppButton";
import { useSnackbar } from "notistack";

const CONTACT_EMAIL = "tzuki.yahav@gmail.com";
const PHONE_NUMBER = "054-6261880";

export default function Contact() {
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? appTheme.dark : appTheme.light;
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState([]);

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (!value || value.length < 2 || value.length > 50) {
      setFormErrors((prev) => [...prev, "name"]);
    } else {
      setFormErrors((prev) => prev.filter((err) => err !== "name"));
    }
    setForm({ ...form, name: e.target.value });
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    if (!value || value.length < 5 || value.length > 100) {
      setFormErrors((prev) => [...prev, "email"]);
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
      setFormErrors((prev) => [...prev, "email"]);
    } else {
      setFormErrors((prev) => prev.filter((err) => err !== "email"));
    }
    setForm({ ...form, email: e.target.value });
  };
  const handleMessageChange = (e) => {
    const value = e.target.value;
    if (!value || value.length < 2 || value.length > 500) {
      setFormErrors((prev) => [...prev, "message"]);
    } else {
      setFormErrors((prev) => prev.filter((err) => err !== "message"));
    }
    setForm({ ...form, message: e.target.value });
  };

  // mailto
  const handleSend = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from Portfolio: ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`,
      "_blank"
    );
    enqueueSnackbar(t("contact.thankYou"), { variant: "success" });
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", py: 6 }}>
      <Paper
        sx={{
          p: { xs: 2, md: 4 },
          borderRadius: 6,
          bgcolor: theme.colors.cardBackground,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={900}
          color={theme.colors.textLight}
          mb={2}
        >
          {t("contact.title")}
        </Typography>
        <Typography variant="body1" color={theme.colors.secondaryText} mb={3}>
          {t("contact.subtitle")}
        </Typography>
        <form onSubmit={handleSend}>
          <Stack spacing={2}>
            <AppInput
              type="text"
              placeholder={t("contact.name")}
              value={form.name}
              onChange={handleNameChange}
              error={formErrors.includes("name")}
              errorMessage={t("contact.nameError")}
              instructions={
                <Typography
                  variant="caption"
                  color={theme.colors.secondaryText}
                >
                  {t("contact.nameInstructions")}
                </Typography>
              }
            />
            <AppInput
              type="email"
              placeholder={t("contact.email")}
              value={form.email}
              onChange={handleEmailChange}
              error={formErrors.includes("email")}
              errorMessage={t("contact.emailError")}
              instructions={
                <Typography variant="caption" color={theme.colors.textMuted}>
                  {t("contact.emailInstructions")}
                </Typography>
              }
            />
            <AppTextArea
              placeholder={t("contact.message")}
              value={form.message}
              onChange={handleMessageChange}
              error={formErrors.includes("message")}
              errorMessage={t("contact.messageError")}
              instructions={
                <Typography
                  variant="caption"
                  color={theme.colors.secondaryText}
                >
                  {t("contact.messageInstructions")}
                </Typography>
              }
            />
            <Divider sx={{ my: 2 }} />
            <AppButton
              label={t("contact.send")}
              onClick={handleSend}
              variant="secondary"
              fullWidth
            />
          </Stack>
        </form>
        <Divider sx={{ my: 4 }} />
        <Typography variant="h6" mb={2} color={theme.colors.textLight}>
          {t("contact.orReach")}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Tooltip title="LinkedIn">
            <IconButton
              href="https://linkedin.com/in/yahav-tzukerman"
              target="_blank"
              rel="noopener"
              color="primary"
              sx={{ fontSize: 30 }}
            >
              <FaLinkedin />
            </IconButton>
          </Tooltip>
          <Tooltip title="GitHub">
            <IconButton
              href="https://github.com/Yahav-Tzukerman"
              target="_blank"
              rel="noopener"
              color="primary"
              sx={{ fontSize: 30 }}
            >
              <FaGithub />
            </IconButton>
          </Tooltip>
          <Tooltip title={CONTACT_EMAIL}>
            <IconButton
              href={`mailto:${CONTACT_EMAIL}`}
              color="primary"
              sx={{ fontSize: 30 }}
            >
              <FaEnvelope />
            </IconButton>
          </Tooltip>
          <Tooltip title={PHONE_NUMBER}>
            <IconButton
              href={`tel:${PHONE_NUMBER}`}
              color="primary"
              sx={{ fontSize: 30 }}
            >
              <FaPhone />
            </IconButton>
          </Tooltip>
        </Stack>
      </Paper>
    </Box>
  );
}
