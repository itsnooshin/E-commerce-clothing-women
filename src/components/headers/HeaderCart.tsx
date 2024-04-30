import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
export default function HeaderCart() {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        marginBottom: '2rem',
      }}
    >
      <Button
        sx={{
          color: '#5A6D57',
          fontSize: '1rem',
          paddingLeft: '1.5rem',
          textTransform: 'capitalize',
        }}
        onClick={() => router.back()}
      >
        Back
      </Button>
      <Typography fontFamily={'inherit'} variant="h5" fontWeight={'700'}>
        Your Cart
      </Typography>
    </Box>
  );
}
