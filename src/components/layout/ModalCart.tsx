import { Modal, Box, Button } from "@mui/material";
import React, { PropsWithChildren, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function ModalCart() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Modal open={openModal}>
      <Box
        sx={{
          background: "white",
          width: "500px",
          height: "700px",
          position: "absolute" as "absolute",
          top: "0px",
          right: "0rem",
          padding: "2rem",
        }}
      >
        this is modal
        <Button
          onClick={handleCloseModal}
          sx={{
            color: "black",
            position: "absolute" as "absolute",
            right: "0rem",
            top: "1rem",
          }}
        >
          <CloseIcon />
        </Button>
      </Box>
    </Modal>
  );
}
