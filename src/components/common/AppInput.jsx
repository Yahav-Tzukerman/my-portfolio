import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TextField, InputAdornment, IconButton, Tooltip } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import appTheme from "../../styles/theme";
import { is } from "../../../node_modules/immer/src/utils/common";

const AppInput = ({
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  errorMessage,
  instructions,
}) => {
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? appTheme.dark : appTheme.light;
  const [selected, setSelected] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const isRtl = app.lang === "he";

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleFocus = () => {
    setSelected(true);
  };

  const handleBlur = () => {
    setSelected(false);
  };

  return (
    <Tooltip
      title={instructions && error ? instructions : ""}
      open={!!(instructions && error && selected)}
      placement={isRtl ? "left" : "right"}
      arrow
    >
      <TextField
        label={placeholder}
        type={type === "password" && showPassword ? "text" : type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        error={!!error}
        helperText={error ? errorMessage : ""}
        variant="outlined"
        fullWidth
        InputLabelProps={{
          style: {
            color: theme.colors.textLight,
            transformOrigin: isRtl ? "top right" : "top left",
            right: isRtl ? 35 : "auto", // הזזה פנימה קצת
            left: isRtl ? "auto" : 10,
          },
          shrink: type === "date" ? true : undefined,
        }}
        InputProps={{
          style: {
            backgroundColor: theme.colors.inputBackground,
            color: theme.colors.textLight,
            borderRadius: theme.input.borderRadius,
            fontFamily: theme.fontFamily,
            direction: type === "email" ? "ltr" : isRtl ? "rtl" : "ltr",
          },
          endAdornment:
            type === "password" ? (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleTogglePassword}
                  edge="end"
                  style={{
                    color: theme.colors.textLight,
                  }}
                  tabIndex={-1}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ) : null,
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: error
                ? theme.colors.error
                : selected
                ? theme.colors.inputBorderSelected
                : theme.colors.inputBorder,
            },
            "& legend": {
              textAlign: isRtl ? "right" : "left",
              marginRight: isRtl ? "8px" : 0,
              marginLeft: isRtl ? 0 : "8px",
            },
          },
          ...(type === "date"
            ? {
                "& input[type='date']::-webkit-calendar-picker-indicator": {
                  filter: app.darkMode ? "invert(1)" : "none",
                  transform: "scale(1.3)",
                  cursor: "pointer",
                },
              }
            : {}),
          mb: 2,
        }}
      />
    </Tooltip>
  );
};

export default AppInput;
