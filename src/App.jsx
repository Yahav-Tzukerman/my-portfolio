import React, { useEffect, useState } from "react";
import AppRouter from "./AppRouter";
import { Container, Paper } from "@mui/material";
import AppNavbar from "./components/common/AppNavbar";
import { useSelector, useDispatch } from "react-redux";
import appTheme from "./styles/theme";
import WakeServersSpinner from "./components/common/WakeServersSpinner";
import { useTranslation } from "react-i18next";
import Footer from "./components/common/Footer";
import { SnackbarProvider } from "notistack";
import ScrollToTop from "./components/common/ScrollToTop";
import "./i18n";

const App = () => {
  const app = useSelector((state) => state.app);
  const theme = app.darkMode ? appTheme.dark : appTheme.light;
  const [serversReady, setServersReady] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "he" ? "rtl" : "ltr";
  }, [i18n.language]);

  if (!serversReady && import.meta.env.VITE_ENVIRONMENT === "production")
    return <WakeServersSpinner onDone={() => setServersReady(true)} />;

  return (
    <Paper
      sx={{
        minHeight: "100vh",
        background: `${theme.colors.gradientBackground} !important`,
      }}
    >
      <AppNavbar />
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          color: theme.colors.textLight,
          fontFamily: theme.fontFamily,
          px: { xs: 0, sm: 2, md: 3 },
          boxSizing: "border-box",
        }}
      >
        <SnackbarProvider
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <AppRouter />
          <ScrollToTop />
        </SnackbarProvider>
      </Container>
      <Footer />
    </Paper>
  );
};

export default App;
