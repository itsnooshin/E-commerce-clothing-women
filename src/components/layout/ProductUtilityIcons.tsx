import React from "react";
import { Box, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
export default function ProductUtilityIcons() {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"550px"}
      color={"#868686"}
      marginTop={"2rem"}
    >
      <Box display={"flex"} alignItems={"center"} gap={"4px"}>
        <LocalShippingOutlinedIcon />
        <Typography>Easy Return</Typography>
      </Box>
      <Box display={"flex"} alignItems={"center"} gap={"4px"}>
        <FavoriteBorderOutlinedIcon sx={{ color: "#000000" }} />
        <Typography>Add to Wish List</Typography>
      </Box>
    </Box>
  );
}
