import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import Image from 'next/image';

const ImagesMansory = [
  {
    src: 'https://www.thisisaday.com/cdn/shop/products/Lifestyle_Detail_Something_Tailored_Shirt_White_1400x.jpg?v=1684967379',
    height: 400,
    name : 'Boluses'
  },
  {
    src: 'https://www.thisisaday.com/cdn/shop/files/Moodboard2_71ade389-dc80-49eb-b7e8-1c90a0273a2a_700x.jpg?v=1675014167',
    height: 700,
    name : 'Pants'
  },
  {
    src: 'https://www.thisisaday.com/cdn/shop/files/Save_The_Date_Dress_Khaki_Lifestyle_Khaki_Main_720x.jpg?v=1700065923',
    height: 600,
    name : 'Dresses'
  },
  {
    src: 'https://img.mytheresa.com/1094/1238/100/jpeg/catalog/product/6c/P00831921_d1.jpg',
    height: 300,
    name : 'Outwear'
  },
];



function Collection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container>
      <Box sx={{ mt: '6rem' , mb :'1.5rem' }}>
        <Typography variant="h5"  fontWeight="600" fontFamily="inherit">
          Collection
        </Typography>
      </Box>

      <Masonry
        columns={2}
        spacing={{ lg: 6, xs: 2 }}
        style={{ columnGap: '10px', rowGap: '1rem' }}
      >
        {ImagesMansory.map((item, index) => (
          <Box key={index}>
            <img
              src={item.src}
              alt="hhhhhh"
              width={500}
              height={item.height}
              style={{
                objectFit: isMobile ? 'contain' :'cover',
                width: '100%',
                height: isMobile ? 'auto' : '',
              }}
            />
            <p>{isMobile && `${item.name}`}</p>
          </Box>
        ))}
      </Masonry>
    </Container>
  );
}

export default Collection;
