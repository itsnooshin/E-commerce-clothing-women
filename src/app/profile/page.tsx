"use client";

import BannerHeader from "@/src/components/headers/BannerHeader";
import NavBar from "@/src/components/layout/NavBar";
import { useAuth } from "@/src/context/authContext";
import {
  Box,
  Breadcrumbs,
  Container,
  FormControl,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import img from "@/public/ddd.png";
import Image from "next/image";
import Person3Icon from "@mui/icons-material/Person3";
import Footer from "@/src/components/layout/Footer";
import Link from "next/link";

export default function WelcomePage() {
  const { userInfoEmail, userInfoFirstName, userInfoLastName, isLoggedIn } =
    useAuth();

  const [value, setValue] = useState<string | "1">("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  if (!isLoggedIn) {
    return;
  }
  return (
    <>
      <BannerHeader />
      <NavBar />
      <Container>
        <Box sx={{ padding: "1rem 0rem" }}>
          <Breadcrumbs sx={{ color: "black" }}>
            <Link href={"/"} style={{ color: "#5A6D57" }}>
              Home
            </Link>
            <Typography>Customer Information</Typography>
          </Breadcrumbs>
        </Box>
      </Container>
     
      <TabContext value={value}>
        <Box
          sx={{
            display: "flex",
            marginTop: "3rem",
            paddingBottom: "10rem",
            paddingTop: "3rem",
          }}
        >
          <TabList
            onChange={handleChange}
            orientation="vertical"
            sx={{ borderRight: 1, borderColor: "divider" }}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#5A6D57",
                height: "45px",
                width: "7px",
                // borderRadius: "5px",
              },
            }}
          >
            {[
              "My Profile",
              "My Order",
              "My Adresses",
              "My Wish List",
              "Log out",
            ].map((item, index) => (
              <Tab
                value={index}
                label={item}
                sx={{
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  color: value === (index + 1).toString() ? "#5A6D57" : "black",
                  width: "250px",
                  // background : "red"
                }}
              />
            ))}
          </TabList>

          <Box>
            <TabPanel
              value="1"
              sx={{
                // padding: "1.5rem 2rem",
                width: "800px",
                marginLeft: "2rem",
                borderRadius: "3px",
                padding: 0,
              }}
            >
              <Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mb: 6,
                  }}
                >
                  <Typography
                    variant="h5"
                    fontFamily={"inherit"}
                    fontWeight={"bold"}
                    sx={{ paddingBottom: "1rem" }}
                  >
                    Account Information
                  </Typography>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "4px" }}
                  >
                    <Person3Icon sx={{ color: "#5A6D57" }} />
                    <Typography>Welcome {userInfoFirstName}</Typography>
                  </Box>

                  {/* <Typography sx={{ display: "block" }}>
                      You have logged in with {userInfoEmail}
                    </Typography> */}
                </Box>
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Typography
                  sx={{
                    background: "#e9ecef",
                    padding: "0.9rem 0.8rem",
                    width: "300px",
                  }}
                >
                  First Name
                </Typography>
                <Typography sx={{ marginLeft: "2rem" }}>
                  {userInfoFirstName}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  marginTop: "0.5rem",
                }}
              >
                <Typography
                  sx={{
                    background: "#e9ecef",
                    padding: "0.9rem 0.8rem",
                    width: "300px",
                  }}
                >
                  Last Name
                </Typography>
                <Typography sx={{ marginLeft: "2rem" }}>
                  {userInfoLastName}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  marginTop: "0.5rem",
                }}
              >
                <Typography
                  sx={{
                    background: "#e9ecef",
                    padding: "0.9rem 0.8rem",
                    width: "300px",
                  }}
                >
                  Email Adress
                </Typography>
                <Typography sx={{ marginLeft: "2rem" }}>
                  {userInfoEmail}
                </Typography>
              </Box>
              {/* <FormControl sx={{ width: "600px" }}>
                  <TextField
                    label="First Name"
                    defaultValue={userInfoFirstName}
                    fullWidth
                  />
                </FormControl> */}
            </TabPanel>
            <TabPanel value="2">pannel 2</TabPanel>
            <TabPanel value="3">pannel 3</TabPanel>
            <TabPanel value="4">pannel 4</TabPanel>
          </Box>
        </Box>
      </TabContext>

      <Footer />
    </>
  );
}
