import { Typography, Box } from '@mui/material';

function BannerHeader() {
  return (
    <Box>
      <Typography
        textAlign="center"
        sx={{
          fontWeight: { sm: "400", md: "600", lg: "600" },
          letterSpacing: { sm: "0px", md: "1px", lg: "2px" },
          fontSize: { xs: "10px", sm: "12px", md: "13px", lg: "14px" },
          p: (theme) => theme.spacing(0.6, 0.6),
        }}
        bgcolor="#5A6D57"
        color="text.secondary"
      >
        Enjoy Free Shipping On All Orders
      </Typography>
    </Box>
  );
}

export default BannerHeader;
