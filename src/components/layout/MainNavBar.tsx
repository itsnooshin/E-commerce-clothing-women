import { AppBar, Toolbar, Box, Drawer, Typography } from "@mui/material";
import LogoWebsite from "./LogoWebsite";
import DesktopMenu from "./DesktopMenu";
import LogoMobileWebsite from "./LogoMobileWebsite";
import IconHeader from "@/src/components/headers/IconHeader";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { PropsWithChildren, useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

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

  // mobile menu
  const [open, setOpen] = useState(false);

  function ToggleMenu() {
    console.log("toggle menu is right");
    // setIsOpen(true);
  }

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
            gap: "9px",
            alignItems: "center",
          }}
        >
          <MenuOutlinedIcon sx={{ cursor: "pointer" }} onClick={ToggleMenu} />
          <Drawer anchor="left">
            <Box>
              <Typography>hello word</Typography>
            </Box>
          </Drawer>
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
      </Toolbar>
    </AppBar>
  );
}

export default MainNavBar;
