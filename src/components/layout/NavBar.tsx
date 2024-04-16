"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import NavBarHoverDesktop from "@/src/components/layout/NavBarHoverDesktop";
import Modal from "@mui/material/Modal";
import BannerHeader from "@/src/components/headers/BannerHeader";
import MainNavBar from "./MainNavBar";
import { NAV_DATA } from "../../lib/navData";

export default function NavBar() {
  const [isHoverd, setIsHovered] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MainNavBar
        setIsOpen={setIsOpen}
        setIsHovered={setIsHovered}
        options={NAV_DATA}
      />

      <Modal
        open={isOpen}
        style={{ backdropFilter: "blur(5px)", border: "none" }}
      >
        <Box onMouseLeave={() => setIsOpen(false)}>
          <BannerHeader />
          <MainNavBar
            setIsOpen={setIsOpen}
            setIsHovered={setIsHovered}
            options={NAV_DATA}
          />
          <NavBarHoverDesktop
            setHover={setIsHovered}
            options={NAV_DATA}
            isHoverd={isHoverd}
            setIsOpen={setIsOpen}
          />
        </Box>
      </Modal>
    </>
  );
}
