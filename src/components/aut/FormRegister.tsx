import Image from "next/image";
import imageLogin from "@/public/image-login.jpg";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import { Container } from "@mui/material";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import * as yup from "yup";
import Link from "next/link";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import FormFieldRegister from "../layout/FormFieldRegister";

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
    .required("First name is required")
    .min(2, "First name must be  at least 2 characters long"),

  lastname: yup
    .string()
    .trim()
    .required("First name is required")
    .min(2, "First name must be  at least 2 characters long"),

  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email adress is required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address format"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-zA-Z0-9]{8,}/, "Password is Invalid"),
});

function FormRegister() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });
  console.log();
  async function onSubmit(dataForm: formValue) {
    // add try catch

    try {
      const { firstname, lastname, email, password } = dataForm;
      const res = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, password: password }),
      });

      if (res.status === 201) {
        console.log("Registration successful", email);

        setIsRegistered(true);
        setOpen(true);
        setEmail(dataForm.email);
      }
      if (res.status === 401) {
        console.log("Registration is faild");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }

  return (
    <>
      <Container>
        <Box
          sx={{
            mb: 10,
            mt: 5,
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          <Grid container>
            <Grid item xs={6} md={6} gap={12}>
              <Image
                width={500}
                height={600}
                alt="this is a umage for login"
                src={imageLogin}
                style={{ objectFit: "cover" }}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <Box>
                <Stack alignItems={"center"} gap={5}>
                  <Typography
                    fontWeight="600"
                    variant="h5"
                    fontFamily="inherit"
                  >
                    Create Account
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "20px",
                      width: "80%",
                      flexDirection: "column",
                    }}
                  >
                    <form
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      }}
                      noValidate
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <Controller
                        name="firstname"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <TextField
                            value={value}
                            label="First Name"
                            type="text"
                            onChange={onChange}
                            error={Boolean(errors.firstname)}
                            helperText={errors.firstname?.message}
                          />
                        )}
                      />
                      <Controller
                        name="lastname"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <TextField
                            value={value}
                            label="Last Name"
                            type="text"
                            onChange={onChange}
                            error={Boolean(errors.lastname)}
                            helperText={errors.lastname?.message}
                          />
                        )}
                      />
                      <Controller
                        name="email"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <TextField
                            value={value}
                            label="email"
                            type="email"
                            onChange={onChange}
                            error={Boolean(errors.email)}
                            helperText={errors.email?.message}
                          />
                        )}
                      />
                      <Controller
                        name="password"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <TextField
                            value={value}
                            label="Password"
                            type="password"
                            onChange={onChange}
                            error={Boolean(errors.password)}
                            helperText={errors.password?.message}
                          />
                        )}
                      />

                      <Button
                        type="submit"
                        sx={{
                          color: "#fff",
                          backgroundColor: "#5A6D57",
                          textTransform: "capitalize",
                          "&:hover": { backgroundColor: "#5A6D57" },
                        }}
                      >
                        Register Now
                      </Button>
                    </form>

                    <Box
                      sx={{
                        display: "flex",
                        gap: "9px",
                        justifyContent: "center",
                      }}
                    >
                      <Typography>Already have an account? </Typography>
                      <Link href="/login" style={{ color: "#748C70" }}>
                        Log In
                      </Link>
                    </Box>
                  </Box>
                  <Typography>Or</Typography>
                  {/* social medias */}
                  <Typography
                    sx={{
                      fontSize: "15px",
                      textAlign: "center",
                      width: "450px",
                    }}
                  >
                    by clicking register now’’you agree to{" "}
                    <Link
                      href="/"
                      style={{ color: "#748C70", textDecoration: "underline" }}
                    >
                      {" "}
                      Terms& Conditions
                    </Link>{" "}
                    And{" "}
                    <Link
                      href="/"
                      style={{ color: "#748C70", textDecoration: "underline" }}
                    >
                      Privacy Policy.{" "}
                    </Link>
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>

          <Modal
            open={open}
            style={{ backdropFilter: "blur(5px)", border: "none" }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 700,
                bgcolor: "white",
                boxShadow: 24,
                p: 8,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                gap: "17px",
              }}
            >
              <Box>
                <Typography variant="h6" fontWeight="600" fontFamily="inherit">
                  Verify your Email address
                </Typography>
              </Box>
              <IconButton
                sx={{ position: "absolute", top: "8px", left: "8px" }}
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
      {/* <Typography sx={{ xs: "block", md: "none", lg: "none", xl: "none" }}>
        hhhh
      </Typography> */}
      <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
        <Image
          src={imageLogin}
          width={300}
          height={400}
          style={{ objectFit: "cover", width: "100%" }}
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
                display: "flex",
                gap: "20px",

                flexDirection: "column",
              }}
            >
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
                noValidate
                onSubmit={handleSubmit(onSubmit)}
              >
                <Controller
                  name="firstname"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      value={value}
                      label="First Name"
                      type="text"
                      onChange={onChange}
                      error={Boolean(errors.firstname)}
                      helperText={errors.firstname?.message}
                    />
                  )}
                />
                <Controller
                  name="lastname"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      value={value}
                      label="Last Name"
                      type="text"
                      onChange={onChange}
                      error={Boolean(errors.lastname)}
                      helperText={errors.lastname?.message}
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      value={value}
                      label="email"
                      type="email"
                      onChange={onChange}
                      error={Boolean(errors.email)}
                      helperText={errors.email?.message}
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      value={value}
                      label="Password"
                      type="password"
                      onChange={onChange}
                      error={Boolean(errors.password)}
                      helperText={errors.password?.message}
                    />
                  )}
                />
              </form>
              {/* <FormFieldRegister/> */}

              <Box
                sx={{
                  display: "flex",
                  gap: "9px",
                  justifyContent: "center",
                }}
              >
                <Typography>Already have an account? </Typography>
                <Link href="/login" style={{ color: "#748C70" }}>
                  Log In
                </Link>
              </Box>
            </Box>
            <Typography>Or</Typography>
            {/* social medias */}
            <Button
              type="submit"
              sx={{
                color: "#fff",
                backgroundColor: "#5A6D57",
                textTransform: "capitalize",
                "&:hover": { backgroundColor: "#5A6D57" },
              }}
            >
              Register Now
            </Button>
            <Typography
              sx={{
                fontSize: "15px",
                textAlign: "center",

                width: { md: "450x", xs: "310px" },
              }}
            >
              by clicking register now’’you agree to{" "}
              <Link
                href="/"
                style={{ color: "#748C70", textDecoration: "underline" }}
              >
                {" "}
                Terms& Conditions
              </Link>{" "}
              And{" "}
              <Link
                href="/"
                style={{ color: "#748C70", textDecoration: "underline" }}
              >
                Privacy Policy.{" "}
              </Link>
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default FormRegister;
