import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import photo1 from '../public/followus/Frame 427319383.png';
import photo2 from '../public/followus/2.jpg';
import photo3 from '../public/followus/3.jpg';
import photo4 from '../public/followus/4.jpg';
import photo5 from '../public/followus/5.webp';
import Image from 'next/image';

const ImageData = [
  {
    image: photo1,
    height: 640,
  },
  {
    image: photo2,
    height: 320,
  },
  {
    image: photo3,
    height: 320,
  },
  {
    image: photo4,
    height: 320,
  },
  {
    image: photo5,
    height: 320,
  },
];

function FollowUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const images = isMobile ? ImageData.slice(0, 4) : ImageData;

  return (
    <Container sx={{pb :'5rem'}}>
      <Box sx={{ mt: '6rem', mb: '1.5rem' }}>
        <Typography variant="h5" fontWeight="600" fontFamily="inherit">
          Follow us @modimal
        </Typography>
      </Box>

      {isMobile ? (
        <Grid container spacing={2}>
          {images.map((item) => (
            <Grid item xs={6} md={4} sx={{ rowGap: '0', padding: 0 }}>
              <Image
                src={item.image}
                alt="Image galerrey"
                width={350}
                height={350}
                style={{ objectFit: 'cover', width: '100%' }}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Masonry columns={{ xs: 2, md: 3 }} spacing={0}>
          {ImageData.map((item) => (
            <Image
              src={item.image}
              alt="Image galerrey"
              width={500}
              height={item.height}
              style={{ objectFit: 'cover' }}
            />
          ))}
        </Masonry>
      )}
    </Container>
  );
}

export default FollowUs;
