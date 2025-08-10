// src/components/common/LanguageSwitcher.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Select,
  MenuItem,
  Box,
  FormControl,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import appTheme from "../../styles/theme";

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? appTheme.dark : appTheme.light;
  const lang = app.lang;
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang);
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
  }, [lang, i18n]);

  const handleChange = (event) => {
    dispatch({ type: "TOGGLE_LANGUAGE", payload: event.target.value });
  };

  return (
    <Box
      sx={{
        ml: "auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <FormControl
        size="small"
        sx={{
          minWidth: 120,
          borderRadius: 999,
          overflow: "hidden", // ✅ מונע זליגה של הרקע
          bgcolor: theme.colors.cardBackground, // ✅ רקע אחיד
          boxShadow: theme.colors.shadow,
          border: `1px solid ${theme.colors.inputBorder}`,
        }}
      >
        <Select
          value={lang}
          onChange={handleChange}
          aria-label="Language Switcher"
          displayEmpty
          MenuProps={{
            PaperProps: {
              sx: {
                mt: 0.5,
                bgcolor: theme.colors.cardBackground,
                color: theme.colors.textLight,
                border: `1px solid ${theme.colors.inputBorder}`,
                boxShadow: theme.colors.shadow,
              },
            },
            anchorOrigin: { vertical: "bottom", horizontal: "right" },
            transformOrigin: { vertical: "top", horizontal: "right" },
          }}
          sx={{
            // צבעים ואחידות
            bgcolor: theme.colors.cardBackground,
            color: theme.colors.textLight,
            "& .MuiSelect-icon": {
              color: theme.colors.textMuted,
            },
            "& fieldset": { border: "none" }, // בלי מסגרת כפולה
            // טיפוגרפיה ופיל
            px: 1.5,
            py: 0.5,
            borderRadius: 999,
            // תוכן פנימי מסודר עם אייקון
            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
              gap: 8,
              pr: 3, // מרווח לאייקון החץ
            },
          }}
          renderValue={(value) => (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <FontAwesomeIcon icon={faLanguage} style={{ opacity: 0.9 }} />
              <span style={{ fontWeight: 600 }}>
                {value === "he" ? "עברית" : "English"}
              </span>
            </Box>
          )}
        >
          <MenuItem
            value="en"
            sx={{
              color: theme.colors.textLight,
              bgcolor: "transparent",
              "&.Mui-selected": {
                bgcolor: theme.colors.innerCardBackground,
              },
              "&:hover": {
                bgcolor: theme.colors.innerCardBackground,
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 28, color: theme.colors.textMuted }}>
              <FontAwesomeIcon icon={faLanguage} />
            </ListItemIcon>
            <ListItemText primary="English" />
          </MenuItem>

          <MenuItem
            value="he"
            sx={{
              color: theme.colors.textLight,
              bgcolor: "transparent",
              "&.Mui-selected": {
                bgcolor: theme.colors.innerCardBackground,
              },
              "&:hover": {
                bgcolor: theme.colors.innerCardBackground,
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 28, color: theme.colors.textMuted }}>
              <FontAwesomeIcon icon={faLanguage} />
            </ListItemIcon>
            <ListItemText primary="עברית" />
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanguageSwitcher;
