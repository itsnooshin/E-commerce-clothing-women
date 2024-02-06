import { Typography } from '@mui/material';


function BannerHeader() {
  return (
    <Typography
      textAlign="center"
      sx={{
        fontWeight: '600',
        letterSpacing: '2px',
        fontSize: '14px',
        p: (theme) => theme.spacing(0.6, 0.6),
      }}
      bgcolor="background.paper"
      color="text.secondary"
    >
      Enjoy Free Shipping On All Orders
    </Typography>
  );
}

export default BannerHeader;
