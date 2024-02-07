import Image from 'next/image';
import HeroImage from '../public/hero-Desktop.png';
import HeroMobile from '../public/Hero-mobile.png';

import { useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/material';

function HeroSection() {
  // const theme = useTheme();
  // const machtes = useMediaQuery(theme.breakpoints.down('md'));
  // for desktop and mobile
  return (
    <Box sx={{ width: '100%', height: `90vh`, position: 'relative' }}>
      <Image src={HeroImage} layout="fill" objectFit="cover" />
    </Box>
  );
}

export default HeroSection;
