import Image from 'next/image';
import Header from '@/public/Sustainability.png';
import { Box, Button, Typography } from '@mui/material';

function Sustainability() {
  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Image
        alt="this is a header"
        src={Header}
        width={500}
        height={600}
        style={{
          objectFit: 'cover',
          width: '100%',
        }}
        sizes="100vw"
      />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end ',
          flexDirection: 'column',
          position: 'absolute',
          bottom: { xs: '1rem', md: '4rem' },
          right: '20px',
          padding: { xs: '2rem 2rem', md: '1rem 2rem' },
        }}
      >
        <Typography sx={{ marginBottom: '1rem' }}>
          Stylish sustainability in clothing promotes eco-friendly choices for a
          greater future
        </Typography>
        <Button
          sx={{
            textTransform: 'none',
            color: '#000000',
            backgroundColor: '#fff',
            borderRadius: 0,
            padding: '0.5rem 2rem',
          }}
        >
          Sustainability
        </Button>
      </Box>
    </Box>
  );
}

export default Sustainability;
