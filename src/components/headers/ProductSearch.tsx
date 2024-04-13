import Link from "next/link";
import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Button, Modal, Box } from "@mui/material";
import BannerHeader from "./BannerHeader";
import NavBar from "../layout/NavBar";
import CloseIcon from "@mui/icons-material/Close";
export default function ProductSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {isOpen ? (
        <Button>
          <CloseIcon />
        </Button>
      ) : (
        <Button
          onClick={handleOpen}
          sx={{
            color: "inherit",
            padding: "0px",
            margin: "0px",
            display: "block",
            minWidth: "0px",
          }}
        >
          {" "}
          <SearchOutlinedIcon />
        </Button>
      )}

      <Modal open={isOpen}>
        <>
          <BannerHeader />
          {/* <NavBar /> */}
        </>
      </Modal>
    </>
  );
}
