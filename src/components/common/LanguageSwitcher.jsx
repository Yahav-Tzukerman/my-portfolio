import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select, MenuItem, Box, InputLabel, FormControl } from "@mui/material";
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
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <FormControl
        sx={{
          minWidth: 92,
          pr: "1.2rem",
          bgcolor: theme.colors.background,
          borderRadius: "6px",
          boxShadow: theme.colors.shadow,
        }}
        size="small"
      >
        <InputLabel
          id="language-select-label"
          sx={{
            color: theme.colors.textLight,
            display: "flex",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon icon={faLanguage} style={{ marginRight: 8 }} />
        </InputLabel>
        <Select
          labelId="language-select-label"
          value={lang}
          onChange={handleChange}
          label="Language"
          sx={{
            color: theme.colors.textLight,
            bgcolor: theme.colors.background,
            "& .MuiSelect-icon": {
              color: theme.colors.textMuted,
            },
            "& fieldset": {
              borderColor: theme.colors.inputBorder,
            },
          }}
        >
          <MenuItem
            value="en"
            sx={{
              color: theme.colors.textLight,
              bgcolor: theme.colors.cardBackground,
              "&.Mui-selected": {
                bgcolor: theme.colors.innerCardBackground,
                "&:hover": {
                  bgcolor: theme.colors.hover,
                },
              },
              "&:hover": {
                bgcolor: theme.colors.hover,
              },
            }}
          >
            English
          </MenuItem>
          <MenuItem
            value="he"
            sx={{
              color: theme.colors.textLight,
              bgcolor: theme.colors.cardBackground,
              "&.Mui-selected": {
                bgcolor: theme.colors.innerCardBackground,
                "&:hover": {
                  bgcolor: theme.colors.hover,
                },
              },
              "&:hover": {
                bgcolor: theme.colors.hover,
              },
            }}
          >
            עברית
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanguageSwitcher;
