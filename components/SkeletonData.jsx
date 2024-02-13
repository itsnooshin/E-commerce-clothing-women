import { Box, Skeleton } from '@mui/material';

function SkeletonData() {
  return (
    <>
      <Skeleton
        variant="rectangular"
        sx={{ fontSize: '1rem' }}
        height="430px"
      />
      <Skeleton variant="text" width="250px" />
      <Skeleton variant="text" width="150px" />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <Skeleton variant="circular" width={30} height={30} />
        <Skeleton variant="circular" width={30} height={30} />
        <Skeleton variant="circular" width={30} height={30} />
      </Box>
    </>
  );
}

export default SkeletonData;
