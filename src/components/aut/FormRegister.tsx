import Image from "next/image";
import imageLogin from "@/public/image-login.jpg";
import { Box } from "@mui/material";
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
import supabase from "@/src/lib/utilits/supabase";

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
    .email("Invalid email format")
    .required("Email is required"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-zA-Z0-9]{8,}/, "Password is Invalid"),
});

function FormRegister() {
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

  async function onSubmit(dataForm: formValue) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: dataForm.email,
        password: dataForm.password,
        options: {
          data: {
            first_name: dataForm.firstname,
            last_name: dataForm.lastname,
          },
        },
      });
      alert("check your email for verfiaction link");
    } catch (error) {
      alert(error);
    }
  }

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
              style={{ objectFit: "cover" }}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <Box>
              <Stack alignItems={"center"} gap={5}>
                <Typography fontWeight="600" variant="h5" fontFamily="inherit">
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
                  sx={{ fontSize: "15px", textAlign: "center", width: "450px" }}
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
      </Box>
    </Container>
  );
}

export default FormRegister;
