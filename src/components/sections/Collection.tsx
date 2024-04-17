import { Button, Grid, Skeleton } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import { Box } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import Image from "next/image";
import Link from "next/link";
import { ImagesMansory } from "@/src/lib/utilits/ImageData";
import { useState, useEffect } from "react";

function Collection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);

  return (
    <Container>
      {isLoading ? (
        <Box sx={{ mb: 4, mt: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
              <Skeleton variant="rectangular" height={"100%"} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Skeleton variant="rectangular" height={640} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Skeleton variant="rectangular" height={340} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Skeleton variant="rectangular" height={"100%"} />
            </Grid>
          </Grid>
        </Box>
      ) : (
        <>
          <Box sx={{ mt: "6rem", mb: "1.5rem" }}>
            <Typography variant="h5" fontWeight="600" fontFamily="inherit">
              Collection
            </Typography>
          </Box>
          <Masonry
            columns={2}
            spacing={{ lg: 6, xs: 2 }}
            style={{ columnGap: "10px", rowGap: "1rem" }}
          >
            {ImagesMansory.map((item, index) => (
              <Link
                key={item.id}
                href={`/collection/${item.name.toLowerCase()}`}
              >
                <Box sx={{ position: "relative" }}>
                  <Image
                    src={item.src}
                    alt={`Image for ${item.name}`}
                    width={500}
                    height={item.height}
                    style={{
                      objectFit: isMobile ? "contain" : "cover",
                      maxWidth: "100%",
                      height: isMobile ? "auto" : "",
                    }}
                    sizes="100vw"
                  />
                  <Typography>{isMobile && `${item.name}`}</Typography>

                  {!isMobile && (
                    <Button
                      sx={{
                        position: "absolute",
                        bottom: "2rem",
                        right: "3rem",
                        textTransform: "capitalize",
                        color: "#000",
                        padding: "0.5rem 3rem",
                        background: "#fff",
                      }}
                    >
                      {item.name}
                    </Button>
                  )}
                </Box>
              </Link>
            ))}
          </Masonry>{" "}
        </>
      )}
    </Container>
  );
}

export default Collection;
