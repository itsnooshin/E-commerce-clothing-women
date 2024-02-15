import Image from 'next/image';
import Header from '../public/Sustainability.png';
import { Box, Button, Typography } from '@mui/material';

function Sustainability() {
  return (
    <Box
      sx={{ position: 'relative', width: '100%',  mt: '40px'  }}
    >
      <Image
        alt="this is a header"
        src={Header}
        width={500}
        height={500}
        style={{
          objectFit: 'cover',
          width: '100%',
        }}
      />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end ',
          flexDirection: 'column',
          position: 'absolute',
          bottom :'4rem' ,
          right: '50px',
        }}
      >
        <Typography maxWidth="450px">
          Stylish sustainability in clothing promotes eco-friendly choices for a
          greater future
        </Typography>
        <Button
          sx={{
            textTransform: 'none',
            color: '#000000',
            backgroundColor: '#fff',
          }}
        >
          Sustainability
        </Button>
      </Box>
    </Box>
  );
}

export default Sustainability;
