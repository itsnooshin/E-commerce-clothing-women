import Link from "next/link";
import { Box, Container, Typography } from "@mui/material";

const CollectionHeader = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", gap: "15px", mt: 3 }}>
        <Link style={{ color: "#748C70" }} href={"/"}>
          Home
        </Link>
        <Typography>/</Typography>
        <Typography>Shop All</Typography>
      </Box>
    </Container>
  );
};
export default CollectionHeader;
