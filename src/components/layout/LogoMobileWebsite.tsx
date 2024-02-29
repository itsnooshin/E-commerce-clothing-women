import { Box } from '@mui/material';
import Image from 'next/image';
import LogoMobile from '@/public/Logo-mobile.png';

function LogoMobileWebsite() {
  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <Image alt="Logo for shop" src={LogoMobile} width={138} height={40} />
    </Box>
  );
}

export default LogoMobileWebsite;
