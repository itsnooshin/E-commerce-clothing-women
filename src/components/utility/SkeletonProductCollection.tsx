import { PropsWithChildren } from "react";
import { Grid, Box, Skeleton } from "@mui/material";
interface ProductCount {
  displayCount: number;
}
const SkeletonProductCollection = (props: PropsWithChildren<ProductCount>) => {
  const { displayCount } = props;

  return (
    <>
      {Array.from({ length: displayCount }, (_, index) => (
        <Grid item xs={12} sm={6} key={index} >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Skeleton
              variant="rectangular"
              sx={{
                fontSize: "1rem",
                height: "400px",
              }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Skeleton variant="text" width="150px" />
                <Skeleton variant="text" width="100px" />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Skeleton variant="circular" width={20} height={20} />
                  <Skeleton variant="circular" width={20} height={20} />
                  <Skeleton variant="circular" width={20} height={20} />
                </Box>
              </Box>

              <Box sx={{ marginLeft: "auto" }}>
                <Skeleton variant="text" width="80px" height="30px" />
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </>
  );
};

export default SkeletonProductCollection;
