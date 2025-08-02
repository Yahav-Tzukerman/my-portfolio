import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AppThemeToggle from "./AppThemeToggle";
import appTheme from "../../styles/theme";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";

const AppNavbar = ({ handleLogout }) => {
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? appTheme.dark : appTheme.light;
  const themeMui = useTheme();
  const isMobile = useMediaQuery(themeMui.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const { i18n } = useTranslation();

  return (
    <AppBar
      position="static"
      sx={{
        width: "100vw",
        background: theme.colors.gradientBackground,
        color: theme.colors.textLight,
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
        {!isMobile ? (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                mr: 2,
                width: "40px",
                height: "40px",
              }}
            >
              <Logo />
            </Box>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                color: theme.colors.textLight,
                display: { xs: "none", lg: "block" },
                mr: 2,
              }}
            >
              {i18n.t("app.title")}
            </Typography>
          </Box>
        ) : null}

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{
                sx: {
                  background: theme.colors.gradientBackground,
                  color: theme.colors.textLight,
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  textDecoration: "none",
                  color: theme.colors.textLight,
                  padding: 2,
                }}
              >
                {i18n.t("app.title")}
              </Typography>
              <Box width={220}>
                <List>
                  <ListItem
                    button
                    component={Link}
                    to="/"
                    onClick={() => setDrawerOpen(false)}
                  >
                    <ListItemText primary={i18n.t("nav.home")} />
                  </ListItem>

                  <ListItem
                    button
                    component={Link}
                    to="/resume"
                    onClick={() => setDrawerOpen(false)}
                  >
                    <ListItemText primary={i18n.t("nav.resume")} />
                  </ListItem>

                  <ListItem
                    button
                    component={Link}
                    to="/projects"
                    onClick={() => setDrawerOpen(false)}
                  >
                    <ListItemText primary={i18n.t("nav.projects")} />
                  </ListItem>

                  <ListItem
                    button
                    component={Link}
                    to="/contact"
                    onClick={() => setDrawerOpen(false)}
                  >
                    <ListItemText primary={i18n.t("nav.contact")} />
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <>
              <Button
                component={Link}
                to="/"
                sx={{
                  color: theme.colors.textLight,
                  textTransform: "none",
                }}
              >
                {i18n.t("nav.home")}
              </Button>

              <Button
                component={Link}
                to="/resume"
                sx={{
                  color: theme.colors.textLight,
                  textTransform: "none",
                }}
              >
                {i18n.t("nav.resume")}
              </Button>

              <>
                <Button
                  component={Link}
                  to="/projects"
                  sx={{
                    color: theme.colors.textLight,
                    textTransform: "none",
                  }}
                >
                  {i18n.t("nav.projects")}
                </Button>

                <Button
                  component={Link}
                  to="/contact"
                  sx={{
                    color: theme.colors.textLight,
                    textTransform: "none",
                  }}
                >
                  {i18n.t("nav.contact")}
                </Button>
              </>
            </>
          </Box>
        )}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <AppThemeToggle />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", m: "0 1rem" }}>
          <LanguageSwitcher />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavbar;
