import {
  AppBar,
  Toolbar,
  Box,
  Drawer,
  Typography,
  IconButton,
} from "@mui/material";
import LogoWebsite from "./LogoWebsite";
import DesktopMenu from "./DesktopMenu";
import LogoMobileWebsite from "./LogoMobileWebsite";
import IconHeader from "@/src/components/headers/IconHeader";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { PropsWithChildren, useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import BannerHeader from "../headers/BannerHeader";
import CloseIcon from "@mui/icons-material/Close";
import MobileMenu from "./MobileMenu";

interface Option {
  name?: string;
  category?: string[];
  featured?: string[];
  More?: string[];
  nameCat?: string;
  nameFeat?: string;
  nameMore?: string;
  imageData?: string[];
  imageDescription?: string[];
}

interface MainNavBar {
  options: Option[];
  setIsHovered: (hover: string) => void;
  setIsOpen: (hover: boolean) => void;
}

function MainNavBar(props: PropsWithChildren<MainNavBar>) {
  const { options, setIsHovered, setIsOpen } = props;
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#ffff",
        boxShadow: "none",
        color: "#404040",
        width: "100%",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "space-between", md: "space-around" },
          p: "10px 10px",
        }}
      >
        <LogoWebsite />

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            // gap: "9px",
            alignItems: "center",
          }}
        >
          <IconButton onClick={handleDrawerOpen}>
            <MenuOutlinedIcon sx={{ cursor: "pointer" }} />
          </IconButton>

          <SearchIcon sx={{ cursor: "pointer" }} />
        </Box>

        <DesktopMenu
          options={options}
          setIsHovered={setIsHovered}
          setIsOpen={setIsOpen}
        />
        <Box>
          <LogoMobileWebsite />
          <IconHeader />
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" }, gap: "9px" }}>
          <FavoriteBorderOutlinedIcon sx={{ cursor: "pointer" }} />
          <ShoppingBagOutlinedIcon sx={{ cursor: "pointer" }} />
        </Box>

        {open && (
          <Drawer
            sx={{
              zIndex: 9999,
              display: { xs: "block", md: "none" },

              "& .MuiDrawer-paper": {
                width: "100%",
                backgroundColor: "white",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <BannerHeader />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  alignItems: "center",
                  cursor: "pointer",
                  padding: "7px 10px",
                }}
              >
                <IconButton
                  onClick={handleDrawerClose}
                  sx={{ cursor: "pointer" }}
                >
                  <CloseIcon sx={{ color: "#000000" }} />
                </IconButton>
                <SearchIcon />
              </Box>
              <LogoMobileWebsite />
              <Box sx={{ display: { xs: "flex", md: "none" }, gap: "9px" }}>
                <FavoriteBorderOutlinedIcon sx={{ cursor: "pointer" }} />
                <ShoppingBagOutlinedIcon sx={{ cursor: "pointer" }} />
              </Box>
            </Box>
            <MobileMenu />
          </Drawer>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default MainNavBar;
