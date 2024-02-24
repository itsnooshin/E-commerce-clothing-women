import Image from 'next/image';
import imageLogin from '../public/image-login.jpg';
import { Box } from '@mui/material';
import { Container } from '@mui/material';
import { TextField } from '@mui/material';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';

import Link from 'next/link';

function RegisterAccount() {
  return (
    <Container>
      <Box sx={{ mb: 10, mt: 5 }}>
        <Grid container>
          <Grid item xs={6} md={6}>
            <Image
              width={500}
              height={600}
              alt="this is a umage for login"
              src={imageLogin}
              style={{ objectFit: 'cover' }}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <Box>
              <Stack alignItems={'center'} gap={5}>
                <Typography fontWeight="600" variant="h5" fontFamily="inherit">
                  Create Account
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '20px',
                    width: '80%',
                    flexDirection: 'column',
                  }}
                >
                  <TextField label="First Name" />
                  <TextField label="Last Name" />
                  <TextField label="Email" />
                  <TextField label="Password" />

                  <Button
                    sx={{
                      color: '#fff',
                      backgroundColor: '#5A6D57',
                      textTransform: 'capitalize',
                    }}
                  >
                    Register Now
                  </Button>

                  <Box
                    sx={{
                      display: 'flex',
                      gap: '9px',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography>Already have an account? </Typography>
                    <Link href="/login" style={{ color: '#748C70' }}>
                      Log In
                    </Link>
                  </Box>
                </Box>
                <Typography>Or</Typography>
                {/* social medias */}
                <Typography
                  sx={{ fontSize: '15px', textAlign: 'center', width: '450px' }}
                >
                  by clicking register now’’you agree to{' '}
                  <Link
                    href="/"
                    style={{ color: '#748C70', textDecoration: 'underline' }}
                  >
                    {' '}
                    Terms& Conditions
                  </Link>{' '}
                  And{' '}
                  <Link
                    href="/"
                    style={{ color: '#748C70', textDecoration: 'underline' }}
                  >
                    Privacy Policy.{' '}
                  </Link>
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default RegisterAccount;
