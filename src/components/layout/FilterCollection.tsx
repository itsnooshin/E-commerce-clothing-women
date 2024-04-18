import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function FilterCollection() {
  return (
    <>
    <Box>

      <Typography mb={2} variant="h5" fontWeight={"bold"} fontFamily={"inherit"}>
        Filters
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#748C70",
          mb: 2,
          color: "#fff",
          padding: "0.4rem 0.8rem",
        }}
      >
        <Typography>Sort By</Typography>
        <AddIcon />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#748C70",
          mb: 2,
          color: "#fff",
          padding: "0.4rem 0.8rem",
        }}
      >
        <Typography>Size</Typography>
        <AddIcon />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#748C70",
          mb: 2,
          color: "#fff",
          padding: "0.4rem 0.8rem",
        }}
      >
        <Typography>Color</Typography>
        <AddIcon />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#748C70",
          mb: 2,
          color: "#fff",
          padding: "0.4rem 0.8rem",
        }}
      >
        <Typography>Collection</Typography>
        <AddIcon />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#748C70",
          padding: "0.4rem 0.8rem",
          mb: 2,
          color: "#fff",
        }}
      >
        <Typography>Fabric</Typography>
        <AddIcon />
      </Box>
    </Box>
    </>
  );
}
