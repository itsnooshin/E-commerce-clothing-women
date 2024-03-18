import Image from "next/image";
import imageLogin from "@/public/image-login.jpg";
import { Alert, Box } from "@mui/material";
import { Container } from "@mui/material";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import Link from "next/link";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { error } from "console";
import FormFieldRegister from "../layout/FormFieldRegister";
import FormFieldLogin from "../layout/FormFieldLogin";
import { redirect } from "next/navigation";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { useRouter } from "next/navigation";



interface FormValues {
  email: string;
  password: string;
}

const validationSchema = yup.object({
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

function LoginAccount() {
  const [errorMessage, setErrorMessage] = useState("");

    const router = useRouter();


  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });

  async function onSubmit(dataForm: FormValues) {
    try {
      const { email, password } = dataForm;
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, password: password }),
      });
      if (res.status === 200) {
        router.push('/');
      }
      if (res.status === 401) {
        console.log("Registration is faild");
        setErrorMessage("Password or email is incorrect. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("An error occurred. Please try again later.");
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
                  <Typography
                    fontWeight="600"
                    variant="h5"
                    fontFamily="inherit"
                  >
                    Log In
                  </Typography>
                  {errorMessage && (
                    <Alert severity="error">
                      {errorMessage}
                    </Alert>
                  )}
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
                        gap: "20px",
                        flexDirection: "column",
                      }}
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <Controller
                        name="email"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <TextField
                            label="Email"
                            value={value}
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
                            label="Password"
                            value={value}
                            onChange={onChange}
                            type="password"
                            error={Boolean(errors.password)}
                            helperText={errors.password?.message}
                          />
                        )}
                      />

                      <Typography color={"#748C70"} fontSize="18px">
                        Forgot your password?
                      </Typography>

                      <Button
                        type="submit"
                        sx={{
                          color: "#fff",
                          backgroundColor: "#5A6D57",
                          "&:hover": { backgroundColor: "#5A6D57" },
                        }}
                      >
                        Log In
                      </Button>
                    </form>
                  </Box>
                  <Typography>Or</Typography>
                  {/* social medias */}

                  <Box
                    sx={{
                      display: "flex",
                      gap: "9px",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>New to modimal? </Typography>
                    <Link href="/register" style={{ color: "#748C70" }}>
                      Create an account
                    </Link>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
          pb: { xs: 3 },
        }}
      >
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
              Login
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "20px",

                flexDirection: "column",
              }}
            >
              <FormFieldLogin
                onSubmit={handleSubmit(onSubmit)}
                errors={errors}
                control={control}
              />
            </Box>
            <Typography textAlign={"center"}>Or</Typography>
            {/* social medias */}

            <Box
              sx={{
                display: "flex",
                gap: "9px",
                justifyContent: "center",
              }}
            >
              <Typography>New to modimal? </Typography>
              <Link href="/register" style={{ color: "#748C70" }}>
                Create An Account
              </Link>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default LoginAccount;
