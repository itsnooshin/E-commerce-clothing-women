import { Box, Grid, Typography, TextField } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InputAdornment from '@mui/material/InputAdornment';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import CopyrightIcon from '@mui/icons-material/Copyright';

function FooterGridMobile() {
  return (
    <Box>
      <Box
        sx={{
          paddingTop: '3rem',
          display: 'flex',
          flexDirection: ' column',
          gap: '20px',
          paddingBottom: '2rem',
        }}
      >
        <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>
          Join our club, get 15% off for your Birthday
        </Typography>
        <form>
          <TextField
            placeholder="Enter your name"
            sx={{ width: '100%' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ArrowForwardIcon sx={{ color: '#ffff' }} />
                </InputAdornment>
              ),
            }}
          />
        </form>
        <FormControlLabel
          control={<Checkbox />}
          label="By Submittng your email, you agree to receive advertising emails from Modimal."
          sx={{
            '& .MuiFormControlLabel-label': {
              fontWeight: '600',
              width: '100%',
              fontSize: '14px',
            },
          }}
        />
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              padding: '4px',
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: '600', fontSize: '17px' }}
            >
              About Modimal
            </Typography>

            <Typography>Collection</Typography>
            <Typography>Sustainability</Typography>
            <Typography>Privacy Policy</Typography>
            <Typography>Support System</Typography>
            <Typography>Terms & Condition</Typography>
            <Typography>Copyright Notice</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              padding: '4px',
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: '600', fontSize: '17px' }}
            >
              Help & Support
            </Typography>

            <Typography>Orders & Shipping</Typography>
            <Typography>Returns & Refunds</Typography>
            <Typography>FAQs</Typography>
            <Typography>Contact Us</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              padding: '4px',
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: '600', fontSize: '17px' }}
            >
              Modimal Club
            </Typography>

            <Typography>Careers</Typography>
            <Typography>Visit Us</Typography>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          paddingTop: '30px',
        }}
      >
        <Box sx={{ display: 'flex', gap: '10px' }}>
          <InstagramIcon sx={{ fontSize: '30px' }} />
          <FacebookOutlinedIcon sx={{ fontSize: '30px' }} />
          <PinterestIcon sx={{ fontSize: '30px' }} />
          <TwitterIcon sx={{ fontSize: '30px' }} />
        </Box>

        <Box sx={{ display: 'flex', gap: '10px' }}>
          <CopyrightIcon />
          <Typography>2023 modimal. All Rights Reserved.</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default FooterGridMobile;
