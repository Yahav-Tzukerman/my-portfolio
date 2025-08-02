import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, FormControlLabel, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import appTheme from "../../styles/theme";
import { useTranslation } from "react-i18next";

const AppThemeToggle = () => {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? appTheme.dark : appTheme.light;
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "he";

  const handleThemeToggle = () => {
    dispatch({ type: "TOGGLE_THEME" });
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
      <FormControlLabel
        control={
          <Switch
            checked={app.darkMode}
            onChange={handleThemeToggle}
            color="default"
          />
        }
        label=""
        sx={isRtl ? { pl: "0.8rem" } : { pr: 0 }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "static",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "1.5em",
            height: "1.5em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {app.darkMode ? (
            <FontAwesomeIcon
              icon={faMoon}
              style={{
                cursor: "pointer",
                transition: "opacity 0.2s",
                color: theme.colors.textLight,
                position: "absolute",
                left: 0,
                top: "10%",
              }}
              onClick={handleThemeToggle}
            />
          ) : (
            <FontAwesomeIcon
              icon={faSun}
              style={{
                cursor: "pointer",
                transition: "opacity 0.2s",
                color: theme.colors.textLight,
                position: "absolute",
                left: 0,
                top: "10%",
              }}
              onClick={handleThemeToggle}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default AppThemeToggle;
