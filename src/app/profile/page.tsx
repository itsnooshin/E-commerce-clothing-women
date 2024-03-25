"use client";

import BannerHeader from "@/src/components/headers/BannerHeader";
import NavBar from "@/src/components/layout/NavBar";
import { useAuth } from "@/src/context/authContext";
import { Box, Container, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export default function WelcomePage() {
  const { userInfoFirstName, userInfoLastName, isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return;
  }
  console.log("the firstname is", userInfoFirstName, userInfoLastName);
  return (
    <>
      <BannerHeader />
      <NavBar />
      <Container>
        <Box sx={{ mt: 6, display: "flex", alignItems: "center" }}>
          <HomeIcon sx={{ color: "#5A6D57" }} />
          <Typography variant="h6" fontFamily={"inherit"}>
            Welcome, {userInfoFirstName} {userInfoLastName}{" "}
          </Typography>
        </Box>
      </Container>
    </>
  );
}
