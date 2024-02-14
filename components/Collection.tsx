import { Box, Container, Grid, Typography } from '@mui/material';

const ImagesMansory = [
  {
    src: 'https://www.thisisaday.com/cdn/shop/products/Lifestyle_Detail_Something_Tailored_Shirt_White_1400x.jpg?v=1684967379',
    height: 400,
  },
  {
    src: 'https://www.thisisaday.com/cdn/shop/files/Moodboard2_71ade389-dc80-49eb-b7e8-1c90a0273a2a_700x.jpg?v=1675014167',
    height: 400,
  },
  {
    src: 'https://www.thisisaday.com/cdn/shop/files/Save_The_Date_Dress_Khaki_Lifestyle_Khaki_Main_720x.jpg?v=1700065923',
    height: 500,
  },
  {
    src: 'https://img.mytheresa.com/1094/1238/100/jpeg/catalog/product/6c/P00831921_d1.jpg',
    height: 300,
  },
];

function Collection() {
  return (
    <Container>
      <Box sx={{ mt: '5rem' }}>
        <Typography variant="h5" fontWeight="600" fontFamily="inherit">
          Collection
        </Typography>
      </Box>

      {/* mansory lay out */}
      <Grid>
        <Grid item>1</Grid>
      </Grid>
    </Container>
  );
}

export default Collection;
