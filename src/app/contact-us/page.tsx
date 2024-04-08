"use client";
import BannerHeader from "@/src/components/headers/BannerHeader";
import Footer from "@/src/components/layout/Footer";
import NavBar from "@/src/components/layout/NavBar";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import Link from "next/link";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { EmailOutlined } from "@mui/icons-material";

const page = () => {
  return (
    <>
      <BannerHeader />
      <NavBar />
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Link href="/">
            <Typography sx={{ color: "#748C70" }}> Home</Typography>
          </Link>
          <span>/</span>

          <Typography>Contact Us</Typography>
        </Box>
      </Container>
      <Container>
        <Box
          sx={{
            mt: 5,
            mb: 10,
          }}
        >
          {" "}
          <Typography variant="h5" fontFamily={"inherit"} fontWeight={600}>
            Contact Us
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              background: "#F0F2EF",
              mt: 5,
              padding: "1.5rem",
            }}
          >
            <Typography>
              We always love hearing from our customers! Please do not hesitate
              to contact us should you have any questions regarding our products
              and sizing recommendations or inquiries about your current order.
            </Typography>
            <Typography>
              Contact our Customer Care team through the contact form below,
              email us at hello@modimal.com or live chat with us via our chat
              widget on the bottom right hand corner of this page.
            </Typography>
            <Typography>
              We will aim to respond to you within 1-2 business days.
            </Typography>
          </Box>
          {/* form */}
          <Container maxWidth="md">
            <Box
              display={"flex"}
              gap={"10px"}
              alignItems={"center"}
              sx={{ marginTop: "3rem" }}
            >
              <Box>
                <MailOutlineIcon fontSize="medium" />
              </Box>
              <Typography variant="h6" fontWeight={600}>
                Write Us
              </Typography>
            </Box>
            <Typography sx={{ mt: 4 }}>Your Information</Typography>

            <Box component={"form"}>
              <div>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <TextField
                    variant="standard"
                    label="Full Name"
                    id="standard-textarea"
                  />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <TextField
                    variant="standard"
                    label="Email"
                    id="standard-textarea"
                  />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <TextField
                    variant="standard"
                    label="Subject"
                    id="standard-textarea"
                  />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <TextField
                    variant="standard"
                    label="Order Number"
                    id="standard-textarea"
                  />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <TextField
                    variant="standard"
                    label="Message"
                    id="standard-textarea"
                  />
                </FormControl>
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    color="success"
                    sx={{
                      "&.MuiCheckbox-root": {
                        color: "#A2B39F",
                      },
                    }}
                  />
                }
                label="I have read and understood the contact us privacy and policy."
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontWeight: "400",
                    width: "100%",
                    fontSize: "15px",
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Button
                sx={{
                  color: "#fff",
                  background: "#5A6D57",
                  padding: "0.6rem 7rem",
                  textTransform: "capitalize",
                  borderRadius: 0,
                }}
              >
                Send
              </Button>
            </Box>
          </Container>
          {/* box of commnication , grid three column */}
          <Box sx={{ mt: 12 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4} sm={6}>
                <Box
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: "3px",
                    background: "#F0F2EF",
                    padding: "1rem 1.5rem",
                  }}
                >
                  <Typography>
                    <MessageOutlinedIcon />
                  </Typography>
                  <Typography variant="h6" fontWeight={600}>
                    Chat with us
                  </Typography>
                  <Typography>We are here and ready to chat</Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#5A6D57",
                      color: "#5A6D57",
                      textTransform: "capitalize",
                      borderRadius: 0,
                      width: "100%",
                      marginTop: "1rem",
                    }}
                  >
                    Start Chat
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                <Box>
                  <Box
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      flexDirection: "column",
                      gap: "3px",
                      background: "#F0F2EF",
                      padding: "1rem 1.5rem",
                    }}
                  >
                    <Typography>
                      <ContactPhoneOutlinedIcon />
                    </Typography>
                    <Typography variant="h6" fontWeight={600}>
                      Call us
                    </Typography>
                    <Typography>We're here to Talk to You</Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "#5A6D57",
                        color: "#5A6D57",
                        textTransform: "capitalize",
                        borderRadius: 0,
                        width: "100%",
                        marginTop: "1rem",
                      }}
                    >
                      +1(929)460-3208
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                <Box>
                  <Box
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      flexDirection: "column",
                      gap: "3px",
                      background: "#F0F2EF",
                      padding: "1rem 1.5rem",
                    }}
                  >
                    <Typography>
                      <EmailOutlined />
                    </Typography>
                    <Typography variant="h6" fontWeight={600}>
                      Email Us
                    </Typography>
                    <Typography>We are here and ready to chat</Typography>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "#5A6D57",
                        color: "#5A6D57",
                        textTransform: "capitalize",
                        borderRadius: 0,
                        width: "100%",
                        marginTop: "1rem",
                      }}
                    >
                      Send Email
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      {/* footer */}
      <Footer />
    </>
  );
};

export default page;
