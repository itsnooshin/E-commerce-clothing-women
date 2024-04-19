import React, { PropsWithChildren } from "react";
import { Box, Typography } from "@mui/material";

interface Types {
  name: string;
  description: string;
}

export default function ProductInformation(props: PropsWithChildren<Types>) {
  const { name, description } = props;
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Typography variant="h6" fontWeight={"bold"} fontFamily={"inherit"}>
        {name.split(" ").slice(0, 2).join(" ")}
      </Typography>
      <Typography sx={{ width: {xs : '100%' , md : '580px'} }}>{description}</Typography>
    </Box>
  );
}
