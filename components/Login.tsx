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

function LoginAccount() {
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
                  Log In{' '}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    gap: '20px',
                    width: '80%',
                    flexDirection: 'column',
                  }}
                >
                  <TextField label="Email" />
                  <TextField label="Password" />
                  <Typography color={'#748C70'} fontSize="18px">
                    Forgot your password?
                  </Typography>

                  <Button sx={{ color: '#fff', backgroundColor: '#5A6D57' }}>
                    Log In
                  </Button>
                </Box>
                <Typography>Or</Typography>
                {/* social medias */}

                <Box
                  sx={{
                    display: 'flex',
                    gap: '9px',
                    justifyContent: 'center',
                  }}
                >
                  <Typography>New to modimal? </Typography>
                  <Link href="/register" style={{ color: '#748C70' }}>
                    Create an account
                  </Link>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default LoginAccount;
