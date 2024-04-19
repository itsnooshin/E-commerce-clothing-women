import { Box, Button } from "@mui/material";
import React, { PropsWithChildren } from "react";

interface Types {
  handle: (event: React.MouseEvent<HTMLButtonElement>) => void;
  price: string;
}

export default function ProductAddCart(props: PropsWithChildren<Types>) {
  const { handle, price } = props;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5A6D57",
        width: {xs : "100%" , md :"550px"},
      }}
    >
      <Button
        onClick={handle}
        sx={{
          color: "#fff",
          padding: "0.5rem",
          textAlign: "center",
        }}
      >
        Add to cart ${price}
      </Button>
    </Box>
  );
}
