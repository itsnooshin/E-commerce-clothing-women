import { Box, Button } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { ImageData } from "@/src/lib/utilits/FollowUSDataImage";
import Image from "next/image";
import { useState } from "react";

function FollowUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const images = isMobile ? ImageData.slice(0, 4) : ImageData;

  return (
    <Container sx={{ pb: "5rem" }}>
      <Box sx={{ mt: "6rem", mb: "1.5rem" }}>
        <Typography variant="h5" fontWeight="600" fontFamily="inherit">
          Follow us @modimal
        </Typography>
      </Box>

      {isMobile ? (
        <Grid container spacing={2}>
          {images.map((item) => (
            <Grid item xs={6} md={4} key={item.id}>
              <Image
                src={item.image}
                alt="Image galerrey"
                width={350}
                height={350}
                style={{ objectFit: "cover", width: "100%" }}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Masonry columns={{ xs: 2, md: 3 }}>
          {ImageData.map((item) => (
            <>
              <Image
                key={item.id}
                src={item.image}
                alt="Image galerrey"
                width={500}
                height={item.height}
                style={{
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
            </>
          ))}
        </Masonry>
      )}
    </Container>
  );
}

export default FollowUs;
