import React, { PropsWithChildren } from "react";
import { Box, Typography, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Types {
  handleCloseModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function EmptyCart(props: PropsWithChildren<Types>) {
  const { handleCloseModal } = props;
  return (
    <Box
      sx={{
        background: "white",
        width: "500px",
        height: "700px",
        position: "absolute" as "absolute",
        top: "0px",
        right: "0rem",
        padding: "2rem",
        display: "flex",
        // justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",

        gap: "2rem",
        paddingTop: "6rem",
      }}
    >
      <Typography variant="h6" fontWeight={600}>
        Your Shopping Bag is Empty
      </Typography>

      <Box sx={{ width: "250px", textAlign: "center" }}>
        <Typography>Discover Modimal And Add Products To your Bag</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          gap: "2rem",
        }}
      >
        <Button
          sx={{
            background: "#5A6D57",
            color: "white",
            borderRadius: 0,
            textTransform: "capitalize",
            padding: "0.5rem 3rem",
          }}
        >
          Collection
        </Button>
        <Button
          sx={{
            background: "#5A6D57",
            color: "white",
            borderRadius: 0,
            padding: "0.5rem 3rem",
            textTransform: "capitalize",
          }}
        >
          New In
        </Button>
        <Button
          sx={{
            background: "#5A6D57",
            color: "white",
            borderRadius: 0,
            padding: "0.5rem 3rem",
            textTransform: "capitalize",
          }}
        >
          Best Sellers
        </Button>
      </Box>
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
  );
}
