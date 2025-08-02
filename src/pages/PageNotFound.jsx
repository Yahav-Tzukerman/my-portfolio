import React from "react";
import { Container, Box, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppButton from "../components/common/AppButton";
import { useTranslation } from "react-i18next";

const PageNotFound = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: "center" }}>
      <Box sx={{ mt: "25vh" }}>
        <Typography variant="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h4" gutterBottom>
          {i18n.t("pageNotFound.title")}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {i18n.t("pageNotFound.description")}
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
          <AppButton
            label={i18n.t("nav.home")}
            variant="secondary"
            onClick={handleLogout}
          />
        </Grid>
      </Box>
    </Container>
  );
};

export default PageNotFound;
