import { Typography, Box } from "@mui/material";
import Link from "next/link";

function BestSellerHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        mt: { xs: "1rem", md: "4rem" },
        mb: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h5"
        fontWeight="600"
        fontFamily="inherit"
        gutterBottom
        xs={{ fontSize: { xs: "0.5rem", sm: "1.5rem", md: "2.125rem" } }}
      >
        Best Sellers
      </Typography>
      <Link href={"/collection/best-sellers"}>
        <Typography color="#5A6D57">View all</Typography>
      </Link>
    </Box>
  );
}

export default BestSellerHeader;
