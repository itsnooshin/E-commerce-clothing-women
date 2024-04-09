import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import { Button, Typography, useMediaQuery } from '@mui/material';
import HeroImage from '@/public/hero-desktop.jpeg';
import { Box } from '@mui/material';

function HeroSection() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      position="relative"
      width="100"
      sx={{ height: { xs: '100%', md: 'auto' } }}
    >
      <Image
        src={HeroImage}
        alt="Image for hero"
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          objectPosition: '30% 40%',
        }}
        width={1441}
        height={600}
        quality={100}
        priority
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          [theme.breakpoints.down('sm')]: {
            top: '67%',
            left: '4%',
          },
          left: '10%',
         
        }}
      >
        <Typography variant={matches ? 'h5' : 'h4'}>
          Elegance in simplicity,
          <br />
          Earth’s Harmony
        </Typography>

        <Button
          sx={{
            bgcolor: '#ffff',
            color: '#0C0C0C',
            textTransform: 'none',
            px: { sm: 2, md: 9 },
            mt: 2,
            borderRadius: 'none',
          }}
        >
          New In
        </Button>
      </Box>
    </Box>
  );
}

export default HeroSection;
