import Image from 'next/image';
import imageLogin from '@/public/image-login.jpg';
import { Box } from '@mui/material';
import { IconButton } from '@mui/material';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import * as yup from 'yup';
import Link from 'next/link';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import FormFieldRegister from '../layout/FormFieldRegister';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

interface formValue {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const validationSchema = yup.object({
  firstname: yup
    .string()
    .trim()
    .required('First name is required')
    .min(2, 'First name must be  at least 2 characters long'),

  lastname: yup
    .string()
    .trim()
    .required('First name is required')
    .min(2, 'First name must be  at least 2 characters long'),

  email: yup
    .string()
    .email('Email must be a valid email')
    .required('Email adress is required')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email address format'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-zA-Z0-9]{8,}/, 'Password is Invalid'),
});

function FormRegister() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(validationSchema),
  });

  async function onSubmit(dataForm: formValue) {
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: dataForm.email,
          password: dataForm.password,
        }),
      });

      console.log(res);
      // const data = await res.json();
      if (res.status === 200) {
        alert('trueeee');
        setOpen(true);
        setEmail(dataForm.email);
        const userDetails = {
          email: dataForm.email,
          firstname: dataForm.firstname,
          lastname: dataForm.lastname,
        };
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        router.push('/login');
      }

      setEmail(dataForm.email);
      const userDetails = {
        email: dataForm.email,
        firstname: dataForm.firstname,
        lastname: dataForm.lastname,
      };

      localStorage.setItem('userDetails', JSON.stringify(userDetails));
    } catch (error) {
      console.error('Error during registration:', error);
    }
  }

  //   try {
  //     const { firstname, lastname, email, password } = dataForm;
  //     const res = await fetch('http://localhost:3000/api/register', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         username: 'nooshin@gmail.com',
  //         password: '1111148924',
  //       }),
  //     });
  //     console.log(res);

  //     if (res.status === 201) {
  //       console.log('yessss');
  //       setOpen(true);
  //       setEmail(dataForm.email);
  //       const userDetails = {
  //         email: dataForm.email,
  //         firstname: dataForm.firstname,
  //         lastname: dataForm.lastname,
  //       };
  //       localStorage.setItem('userDetails', JSON.stringify(userDetails));

  //       router.push('/login');
  //     }
  //     if (res.status === 401) {
  //       console.log('Registration is faild');
  //     }
  //   } catch (error) {
  //     console.error('Error during registration:', error);
  //   }
  // }

  return (
    <>
      <Container>
        <Box
          sx={{
            mb: 10,
            mt: 5,
            display: { xs: 'none', sm: 'none', md: 'block' },
          }}
        >
          <Grid container>
            <Grid item xs={6} md={6} gap={12}>
              <Image
                width={500}
                height={600}
                alt="this is a image for register"
                src={imageLogin}
                style={{ objectFit: 'cover' }}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <Box>
                <Stack alignItems={'center'} gap={5}>
                  <Typography
                    fontWeight="600"
                    variant="h5"
                    fontFamily="inherit"
                  >
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
                    <FormFieldRegister
                      onSubmit={handleSubmit(onSubmit)}
                      errors={errors}
                      control={control}
                    />

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
                    sx={{
                      fontSize: '15px',
                      textAlign: 'center',
                      width: '450px',
                    }}
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

          <Modal
            sx={{ display: { xs: 'none', md: 'block' } }}
            open={open}
            style={{ backdropFilter: 'blur(5px)', border: 'none' }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 700,
                bgcolor: 'white',
                boxShadow: 24,
                p: 8,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '17px',
              }}
            >
              <Box>
                <Typography variant="h6" fontWeight="600" fontFamily="inherit">
                  Verify your Email address
                </Typography>
              </Box>
              <IconButton
                sx={{ position: 'absolute', top: '8px', left: '8px' }}
                onClick={() => setOpen(false)}
              >
                <CloseIcon />
              </IconButton>
              <Box>
                <Typography>
                  We’ve sent an {email} to to Verify Your Email Address and
                  Activate Your Account. The Link in the Email Will Expire in 24
                  Hours.
                </Typography>
              </Box>
              <Box>
                <Typography>
                  Click here if you did not receive an email or would like to
                  change the email address you registered with
                </Typography>
              </Box>
            </Box>
          </Modal>
        </Box>
      </Container>

      <Box
        sx={{
          display: { xs: 'block', sm: 'block', md: 'none' },
          pb: { xs: 3 },
        }}
      >
        <Image
          src={imageLogin}
          width={300}
          height={400}
          style={{ objectFit: 'cover', width: '100%' }}
          alt="image for banner"
        />
        <Container>
          <Stack gap={5}>
            <Typography
              fontWeight="600"
              textAlign="center"
              variant="h6"
              fontFamily="inherit"
            >
              Create Account
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: '20px',

                flexDirection: 'column',
              }}
            >
              <FormFieldRegister
                onSubmit={handleSubmit(onSubmit)}
                errors={errors}
                control={control}
              />

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
            <Typography textAlign={'center'}>Or</Typography>
            {/* social medias */}

            <Typography
              sx={{
                fontSize: '15px',
                textAlign: 'center',

                width: { md: '450x', xs: '400px' },
                margin: { xs: '0 auto' },
              }}
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
        </Container>

        <Modal
          sx={{ display: { xs: 'block', md: 'none' } }}
          open={open}
          style={{ backdropFilter: 'blur(5px)', border: 'none' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '400px',
              bgcolor: 'white',
              boxShadow: 24,
              p: 4,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: '17px',
            }}
          >
            <Box>
              <Typography variant="h6" fontWeight="600" fontFamily="inherit">
                Verify your Email address
              </Typography>
            </Box>
            <IconButton
              sx={{ position: 'absolute', top: '8px', left: '8px' }}
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </IconButton>
            <Box>
              <Typography>
                We’ve sent an {email} to to Verify Your Email Address and
                Activate Your Account. The Link in the Email Will Expire in 24
                Hours.
              </Typography>
            </Box>
            <Box>
              <Typography>
                Click here if you did not receive an email or would like to
                change the email address you registered with
              </Typography>
            </Box>
          </Box>
        </Modal>
      </Box>
    </>
  );
}

export default FormRegister;
